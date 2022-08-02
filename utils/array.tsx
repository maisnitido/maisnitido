export function getYears(nextMentorships: any[]) {

    const years: any[] = [];

    nextMentorships.map(p => {
        
        years.push(p.date);
    });
    console.log(years);
    return years;
}