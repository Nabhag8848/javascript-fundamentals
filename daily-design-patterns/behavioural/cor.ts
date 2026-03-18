abstract class Logger {
    protected logger: Logger | null = null;

    public setNext(logger:Logger): Logger {
        this.logger = logger;
        return logger;
    }

    public abstract log(level: string, message: string): void;
    protected abstract canHandle(level: string): boolean;
    protected abstract write(message: string): void;
}


class InfoLogger extends Logger {
    public log(level: string, message: string): void {
        if(this.canHandle(level)){
            this.write(message)
        }else {
            this.logger?.log(level, message)
        }
    }

    protected canHandle(level: string): boolean {
        return level === "INFO"
    }

    protected write(message: string): void {
        console.log("LOGGED FROM INFO", message)
    }
}


class ErrorLogger extends Logger {
    public log(level: string, message: string): void {
        if(this.canHandle(level)){
            this.write(message)
        }else {
            this.logger?.log(level, message)
        }
    }

    protected canHandle(level: string): boolean {
        return level === "ERROR"
    }

    protected write(message: string): void {
        console.error("LOGGED FROM ERROR", message)
    }
}


class DebugLogger extends Logger {
    public log(level: string, message: string): void {
        if(this.canHandle(level)){
            this.write(message)
        }else {
            this.logger?.log(level, message)
        }
    }

    protected canHandle(level: string): boolean {
        return level === "DEBUG"
    }

    protected write(message: string): void {
        console.debug("LOGGED FROM DEBUG", message)
    }
}

const info = new InfoLogger()
const error = new ErrorLogger()
const debug = new DebugLogger()

info.setNext(debug).setNext(error)

info.log("DEBUG", "hello world")
info.log("ERROR", "hello world")
info.log("INFO", "hello world")
info.log("HELLO", "hello world")