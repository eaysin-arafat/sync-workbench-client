import { Heading } from "@/components/heading/heading";
import PageContainer from "@/layout/root-layout/page-container";
import { KanbanBoard } from "./kanban-board";
import NewTaskDialog from "./new-task-dialog";

export default function KanbanViewPage() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading title={`Kanban`} description="Manage tasks by dnd" />
          <NewTaskDialog />
        </div>
        <KanbanBoard />
      </div>
    </PageContainer>
  );
}
