export function getYears(nextMentorships) {

    const years = [];

    nextMentorships.map(p => {
        
        years.push(p.date);
    });
    console.log(years);
    return years;
}