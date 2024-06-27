/**
 * Implementando features ✨
 * Data: 27/06/2024
 * Commit #1
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
            date: "27/06/2024",
            activity: "Implementando features ✨",
            completed: true
        };
    }
}

const tracker = new ActivityTracker();
console.log(tracker.logActivity());

export { ActivityTracker };
