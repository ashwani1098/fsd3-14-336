// in memory database
let teams = [
    { id: 1,
        tname:"Rusty",
        t1: 'Ashish Raj Singh',
        email: "ashi.raj@gmail.com",
        members: 6
    },
    { id: 2,
        tname:"Thunder",
        t1: 'John Doe',
        email: "john.doe@gmail.com",
        members: 5
    }
];
let nextId = 3;

// get all teams
export const getTeams = ()=>teams;

// get team by id
export const getTeamById = (id)=>teams.find((team)=>team.id===id);

export const addTeam = (newTeam)=>{
    const team = {id: nextId++,newTeam};
    teams.push(team);
    return team;      
};
// update team by id
export const updateTeamById = (id, updatedTeam)=>{
    const team=getTeamById(id);
    // if(team){
    //     team.tname=updatedTeam.tname;
    //     team.t1=updatedTeam.t1;
    //     team.email=updatedTeam.email;
    //     team.members=updatedTeam.members;
    //     return team;
    // }
    // return null;
    if(!team) return null;
    Object.assign(team, updatedTeam);
    return team;
}

// delete team by id
export const deleteTeamById = (id)=>{
    const index=teams.findIndex((team)=>team.id===id);
    if(index===-1) return null;
    teams.splice(index,1);
    return true;
}
