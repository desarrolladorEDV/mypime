"use client"

import { useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { useRouter } from "next/navigation";
//import { RowCell } from "./RowCell"; // Asumiendo que has movido RowCell a un archivo separado
import { format, formatDistance } from "date-fns";
import EliminarButton from "./EiminarButton";
import { EditButtonWithModal } from "./EditButton";
import { DeleteSubmission } from "../../../../actions/form";
import { toast } from "@/components/ui/use-toast";
import Error from "next/error";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

export function SubmissionRow({ row, columns, formContent, formId }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await DeleteSubmission(row.id);
      toast({
        title: "Submission eliminada",
        description: "La submission se ha eliminado correctamente.",
      });
      router.refresh();
    } catch (error) {
      console.error("Error al eliminar la submission:", error);
      toast({
        title: "Error",
        description: Error|| "No se pudo eliminar la submission",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <TableRow>
      {columns.map((column) => (
        <RowCell
          key={column.id}
          type={column.type}
          value={row[column.id]}
        />
      ))}
      <TableCell className="text-muted-foreground text-right">
        {formatDistance(row.submittedAt, new Date(), {
          addSuffix: true,
        })}
      </TableCell>
      <TableCell className="flex gap-2 items-center">
        <EditButtonWithModal
          rowData={row}
          columns={columns}
          formContent={formContent}
        />
        <EliminarButton
          submissionId={row.id}
          onDelete={handleDelete}
          isDeleting={isDeleting}
        />
      </TableCell>
    </TableRow>
  );
}




function RowCell({ type, value }: { type: ElementsType, value: string }) {
    let node: ReactNode = value;
  
    switch (type) {
      case "DateFíeld":
        if (!value) break;
        const date = new Date(value);
        node = <Badge variant="outline">{format(date, "dd/MM/yyyy")}</Badge>;
        break;
      case "CheckboxField":
        const cheked = value === "true" ? true : false;
        node = <Checkbox checked={cheked} disabled />;
        break;
      default:
        break;
    }
  
    return <TableCell>{node}</TableCell>;
  }
  