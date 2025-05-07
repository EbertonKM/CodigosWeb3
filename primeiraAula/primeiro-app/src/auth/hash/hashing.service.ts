export abstract class HashingServiceProtocol {
    async hash(password: string): Promise<string> {
        return ""
    }

    async compare(password: string, passwordHash: string): Promise<boolean> {
        return true
    }
}