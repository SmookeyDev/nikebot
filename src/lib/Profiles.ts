import db from "./db";

export interface IProfile {
    name: string;
    email?: string;
    password?: string;
    proxys?: string[];
}

export class Profiles {

    getAll(): IProfile[] {
        return db.get("profiles") as IProfile[] || [];
    }

    get(name: string) {
        let profiles = this.getAll();
        return profiles.filter(profile => profile.name === name);
    }

    add(profile: IProfile) {
        let profiles = this.getAll();
        if (profiles.some(a => a.name === profile.name)) return false;
        profiles.push(profile);
        db.set("profiles", profiles);
        return true;
    }

    edit(name: string, profile: IProfile) {
        let profiles = this.getAll();
        if (!profiles.some(a => a.name === name)) return false;
        if (profiles.some(a => a.name === profile.name)) return false;
        profiles = profiles.map(a => a.name === name ? profile : a);
        db.set("profiles", profiles);
        return true;
    }

    remove(name: string) {
        let profiles = this.getAll();
        if (!profiles.some(a => a.name === name)) return false;
        profiles = profiles.filter(a => a.name !== name);
        db.set("profiles", profiles);
        return true;
    }
}

export default new Profiles;