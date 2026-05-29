"use client"
import { PressButton } from "../../components/ui/Button";
import { PressInput } from "../../components/ui/Input";
import TaskCard from "../../components/task/TaskCard";
import TaskEmpty from "../../components/task/TaskEmpty";
import { useState } from "react";
import { useTasks } from "../../hooks/useTask";
import '@/styles/pages/home.css'
import { useRedirect } from "@/components/ui/redirect";

export default function Home() {
    const [title, setTitle] = useState("");
    const { tasks, createTask, deleteTask, startTask, finishTask } = useTasks();

    function handleCreate() {
        const trimmed = title.trim();
        if (!trimmed) return;
        createTask(trimmed);
        setTitle("");
    }
    const {goToApiInfo} = useRedirect();
    const {goToAdmin} = useRedirect();
    /* const router = useRouter();

    const goToAdmin = () => {
        router.push("/admin/user")
    }
    const goToApiInfo = () => {
        router.push("/dashboard")
    } */
    return (
    <div className="home">
        <header className="home-header">
            <h1>Task Timer</h1>
        </header>
        <p>
            <PressButton onClick={goToApiInfo}>Go to look Api Information</PressButton>
        </p>
        <section className="home-form">
            <PressInput
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Write the name of your task..."
            />
            <PressButton onClick={handleCreate}>Create</PressButton>

            <PressButton onClick={goToAdmin}>Go to Admin</PressButton>
        </section>

        <section className="home-list">
            {tasks.length === 0 ? (
            <TaskEmpty />
            ) : (
            tasks.map((task) => (
                <TaskCard
                key={task.id}
                task={task}
                onStart={startTask}
                onFinish={finishTask}
                onDelete={deleteTask}
            />
            ))
        )}
        </section>
    </div>
  );
}
