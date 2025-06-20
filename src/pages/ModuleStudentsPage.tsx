import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Check, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data
const mockStudents = [
  { id: 1, name: "Ana Silva", email: "ana.silva@email.com", access: true },
  {
    id: 2,
    name: "Carlos Oliveira",
    email: "carlos.oliveira@email.com",
    access: false,
  },
  {
    id: 3,
    name: "Mariana Santos",
    email: "mariana.santos@email.com",
    access: true,
  },
  { id: 4, name: "Pedro Souza", email: "pedro.souza@email.com", access: false },
  {
    id: 5,
    name: "Juliana Lima",
    email: "juliana.lima@email.com",
    access: false,
  },
];

const mockModule = {
  id: 2,
  name: "Viagem",
};

export default function ModuleStudentsPage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState(mockStudents);

  // Filter students based on search term
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleAccess = (studentId: number) => {
    setStudents(
      students.map((student) =>
        student.id === studentId
          ? { ...student, access: !student.access }
          : student
      )
    );
  };

  const handleSaveChanges = () => {
    // In a real app, this would update the database
    console.log("Saving student access changes:", students);
    navigate("/modules");
  };

  return (
    <div className="min-h-screen p-4">
      <header className="max-w-4xl mx-auto w-full mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="SRSpeak Logo.png" alt="SRSpeak Logo" className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">Gerenciar Acesso de Alunos</h1>
            <p className="text-muted-foreground">Módulo: {mockModule.name}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/modules")}
          className="text-muted-foreground"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar alunos por nome ou e-mail..."
            className="pl-10"
          />
        </div>

        <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Acesso</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead className="w-[100px] text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <Checkbox
                        checked={student.access}
                        onCheckedChange={() => handleToggleAccess(student.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {student.name}
                    </TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell className="text-right">
                      {student.access ? (
                        <span className="inline-flex items-center text-sm font-medium text-green-600">
                          <Check className="h-4 w-4 mr-1" />
                          Ativo
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-sm font-medium text-muted-foreground">
                          <X className="h-4 w-4 mr-1" />
                          Sem acesso
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center py-6 text-muted-foreground"
                  >
                    Nenhum aluno encontrado para o termo de busca
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" onClick={() => navigate("/modules")}>
            Cancelar
          </Button>
          <Button onClick={handleSaveChanges}>Salvar Alterações</Button>
        </div>
      </div>
    </div>
  );
}
