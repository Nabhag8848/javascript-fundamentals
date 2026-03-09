abstract class Device {
    private volume: number;
    private channel: number;
    private power: boolean;

    public disable(): void {
        if(this.power) {
            this.power = false;
        }
    }

    public enable(): void {
        if(!this.power) {
            this.power = true;
        }
    }

    public getChannel(): number {
        return this.channel;
    }

    public getVolume(): number {
        return this.volume;
    }

    public isEnabled(): boolean {
        return this.power;
    }

    public setChannel(channel: number): void { 
        this.channel = channel;
    }
    
    public setVolume(vol: number): void { 
        this.volume = vol;
    }
}

class Radio extends Device { }

class TV extends Device { }

class RemoteControl {
    constructor(protected readonly device: Device) {}

    public togglePower(): void {
        if(this.device.isEnabled()) {
            console.debug('disabled')
            this.device.disable();
        }else {
            console.debug('enable')
            this.device.enable();
        }
    }

    public volumeUp(): void {
        const currentVolume = this.device.getVolume();
        if(currentVolume < 100)
            this.device.setVolume(currentVolume + 1);
    }

    public volumeDown(): void {
        const currentVolume = this.device.getVolume();
        if(currentVolume > 0) {
            this.device.setVolume(currentVolume - 1);
        }
    }

    public channelUp(): void {
        const channel = this.device.getChannel();
        this.device.setChannel(channel + 1);
    }

    public channelDown(): void {
        const channel = this.device.getChannel();
        this.device.setChannel(channel + 1);
    }
}

class AdvancedRemoteControl extends RemoteControl {
    public mute() {
        this.device.setVolume(0);
    }
}

const tv = new TV();
const remote = new RemoteControl(tv);
remote.togglePower();

const advremote = new AdvancedRemoteControl(tv);
advremote.mute(); 