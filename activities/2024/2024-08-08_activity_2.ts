/**
 * Configurando CI/CD 🚀
 * Data: 08/08/2024
 * Commit #2
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
            date: "08/08/2024",
            activity: "Configurando CI/CD 🚀",
            completed: true
        };
    }
}

const tracker = new ActivityTracker();
console.log(tracker.logActivity());

export { ActivityTracker };
