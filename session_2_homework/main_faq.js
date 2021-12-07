const app = document.getElementById('app');
const faq1 = new Faq('HOW DO I BUY TICKETS FOR MATCHES AT OLD TRAFFORD?', 'Match tickets for Premier League games at Old Trafford are sold exclusively to Official Members. If you are a Member already, you can check availability and purchase tickets when they are on sale at manutd.com/tickets. If tickets for the game you are hoping to attend are not available, you can register your interest so that we can notify you if further tickets do become available for sale. Match tickets for all Premier League games excluding Arsenal, Chelsea, Liverpool, Manchester City and Tottenham Hotspur go on sale at the start of the season, but please be aware that not all tickets are made available at this time, with more tickets becoming available any time before the game (subject to availability).');
const faq2 = new Faq('HOW DO I BUY TICKETS FOR AWAY GAMES?', 'Due to the high demand for tickets to away games, applications are accepted by Executive Club Members, and eligible Platinum, Gold and Silver Level Season Ticket holders only.  Applications are generally accepted four weeks before the games and supporters who make applications are notified of their results by email. Visit manutd.com/away for more information on away games, and application dates. You can find information regarding accessible away ticketing in our dedicated section at manutd.com/accessibleaway, by emailing accessibility@manutd.co.uk or calling +44 161 676 7770.');
const faq3 = new Faq('HOW MUCH DO TICKETS COST?', 'For an overview of tickets prices, visit the Match Tickets section at manutd.com/matchticketinfo.')
const faq4 = new Faq('DOES MY CHILD OR BABY NEED A MATCH TICKET?','Yes, every supporter needs a ticket to access the stadium, regardless of their age. It is not advisable to bring a young baby to a game as it can be very noisy, but if you do we suggest that you provide them with ear protectors.');
const faq5 = new Faq('WHATS THE MINIMUM AGE FOR A FAN ATTENDING A GAME ALONE?', 'Any child under age 14 must be accompanied by an individual age 16 or over. All children who are aged 14 on or before 31st August 2021 will be able to apply for junior tickets without an accompanying adult.');


const title = document.createElement('div');
title.classList.add('title');
title.innerHTML = 'FAQ'

app.appendChild(title);
app.appendChild(faq1.render());
app.appendChild(faq2.render());
app.appendChild(faq3.render());
app.appendChild(faq4.render());
app.appendChild(faq5.render());