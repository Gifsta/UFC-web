// Sélection de combattant pour sortir l'id
let queryString_url_id = window.location.search;
let leId = queryString_url_id.slice(1)
leId = leId.replace("id=", "");
console.log(leId);

let FirstName = document.getElementById('firstName');
let LastName = document.getElementById('lastName');
let Nickname = document.getElementById('nickname');
let WeightClass = document.getElementById('weightClass');
let BirthDate = document.getElementById('birthDate');
let Height = document.getElementById('height');
let Weight = document.getElementById('weight');
let Reach = document.getElementById('reach');
let Wins = document.getElementById('wins')
let Losses = document.getElementById('losses');
let Draws = document.getElementById('draws');
let NoContests = document.getElementById('noContests');
let TechnicalKnockouts = document.getElementById('technicalKnockouts');
let TechnicalKnockoutLosses = document.getElementById('technicalKnockoutLosses');
let Submissions = document.getElementById('submissions');
let SubmissionLosses = document.getElementById('submissionLosses');
let TitleWins = document.getElementById('titleWins');
let TitleLosses = document.getElementById('titleLosses');
let TitleDraws = document.getElementById('titleDraws');
let SigStrikesLandedPerMinute = document.getElementById('sigStrikesLandedPerMinute');
let SigStrikeAccuracy = document.getElementById('sigStrikeAccuracy');
let TakedownAverage = document.getElementById('takedownAverage');
let SubmissionAverage = document.getElementById('submissionAverage');
let KnockoutPercentage = document.getElementById('knockoutPercentage');
let TechnicalKnockoutPercentage = document.getElementById('technicalKnockoutPercentage');
let DecisionPercentage = document.getElementById('DecisionPercentage');



fetch('json/Fighters.json')
    .then(res => res.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {
            if (leId == data[i].FighterId) {
                FirstName.innerText = `${data[i].FirstName}`;
                LastName.innerText = `${data[i].LastName}`;
                Nickname.innerText = `${data[i].Nickname}`;
                WeightClass.innerText = `${data[i].WeightClass}`;
                BirthDate.innerText = `${data[i].BirthDate}`;
                Height.innerText = `${data[i].Height}`;
                Weight.innerText = `${data[i].Weight}`;
                Reach.innerText = `${data[i].Reach}`;
                Wins.innerText = `${data[i].Wins}`;
                Losses.innerText = `${data[i].Losses}`;
                Draws.innerText = `${data[i].Draws}`;
                NoContests.innerText = `${data[i].NoContests}`;
                TechnicalKnockouts.innerText = `${data[i].TechnicalKnockouts}`;
                TechnicalKnockoutLosses.innerText = `${data[i].TechnicalKnockoutLosses}`;
                Submissions.innerText = `${data[i].Submissions}`;
                SubmissionLosses.innerText = `${data[i].SubmissionLosses}`;
                TitleWins.innerText = `${data[i].TitleWins}`;
                TitleLosses.innerText = `${data[i].TitleLosses}`;
                TitleDraws.innerText = `${data[i].TitleDraws}`;
                SigStrikesLandedPerMinute.innerText = `${data[i].CareerStats?.SigStrikesLandedPerMinute}`;
                SigStrikeAccuracy.innerText = `${data[i].CareerStats?.SigStrikeAccuracy}`;
                TakedownAverage.innerText = `${data[i].CareerStats?.TakedownAverage}`;
                SubmissionAverage.innerText = `${data[i].CareerStats?.SubmissionAverage}`;
                KnockoutPercentage.innerText = `${data[i].CareerStats?.KnockoutPercentage}`;
                TechnicalKnockoutPercentage.innerText = `${data[i].CareerStats?.TechnicalKnockoutPercentage}`;
                DecisionPercentage.innerText = `${data[i].CareerStats?.KnockoutPercentage}`;
            }
        }



    })


