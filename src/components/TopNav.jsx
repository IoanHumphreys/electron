import React from "react";
import packageJSON from '../../package.json';
import { X } from "lucide-react";

export default function TopNav() {    
    return (
        <header className="inline-flex w-full h-12 items-center drag justify-between border-b-2 border-border-subtle bg-primary-darker select-none">
            <div className="inline-flex items-center justify-center gap-4 w-56 h-full border-r-2 border-border-subtle">
                <div className="font-bold text-white">JMAP</div>
            </div>
            <div className="font-medium text-xs text-text-secondary">
                v{packageJSON.version} - {packageJSON.buildType}
            </div>
            <div className="inline-flex items-center h-6 no-drag border-l-2 border-border-subtle">
                <button className="flex justify-center items-center text-white w-12 h-full hover:bg-primary-lighter" onClick={() => window.close()}>
                    <X size={16}/>
                </button>
            </div>
        </header>
    )
}