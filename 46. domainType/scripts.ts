export function domainType(domains: string[]): string[] {
    const information = []

    for(let i = 0; i < domains.length; i++){
        if(domains[i].split(".").includes("org")){
            information.push("organization")
        }else if(domains[i].split(".").includes("com")){
            information.push("commercial")
        }else if(domains[i].split(".").includes("net")){
            information.push("network")
        }else{
            information.push("information")
        }
    }

    return information
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));