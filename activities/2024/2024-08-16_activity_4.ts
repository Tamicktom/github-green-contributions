/**
 * Implementando APIs 🌐
 * Data: 16/08/2024
 * Commit #4
 */

interface DailyActivity {
    date: string;
    activity: string;
    completed: boolean;
}

class ActivityTracker {
    private activities: string[] = [
        "Tipando interfaces TypeScript",
        "Implementando design patterns",
        "Corrigindo tipos e generics",
        "Configurando ESLint/Prettier",
        "Escrevendo testes com Jest",
        "Refatorando para clean code"
    ];

    public logActivity(): DailyActivity {
        return {
            date: "16/08/2024",
            activity: "Implementando APIs 🌐",
            completed: true
        };
    }
}

const tracker = new ActivityTracker();
console.log(tracker.logActivity());

export { ActivityTracker };
