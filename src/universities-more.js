/*
 * MORE UNIVERSITIES — listed by subject area rather than by individual course.
 *
 * One university per line:
 *   Name | City | Public or Private | subject keys | levels | one good point (optional)
 *
 * subject keys: business, computing, data, engineering, finance, health, science, design, law
 * levels: UG (bachelor's), PG (master's / postgraduate), or UG,PG
 *
 * Compiled from public information. Universities change their courses, fees and rules
 * every year, so check with the university before you apply. Remove any you do not
 * work with and add any that are missing.
 */

const lists = {
  uk: `
University of Manchester | Manchester | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | A Russell Group university and one of the largest in the UK.
University College London | London | Public | business,computing,data,engineering,finance,health,science,design,law | UG,PG | A Russell Group university in central London, ranked among the world’s best.
Imperial College London | London | Public | business,computing,data,engineering,finance,health,science | UG,PG | Focuses only on science, engineering, medicine and business.
King’s College London | London | Public | business,computing,data,health,science,law | UG,PG | A Russell Group university in central London, known for health and law.
University of Edinburgh | Edinburgh | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | A Russell Group university and a world leader in artificial intelligence research.
University of Bristol | Bristol | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | A Russell Group university in one of the UK’s most popular student cities.
University of Warwick | Coventry | Public | business,computing,data,engineering,finance,science,law | UG,PG | A Russell Group university. Warwick Business School is triple accredited.
University of Nottingham | Nottingham | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | A Russell Group university with campuses in the UK, Malaysia and China.
University of Southampton | Southampton | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | A Russell Group university known for engineering and electronics.
University of Sheffield | Sheffield | Public | business,computing,data,engineering,health,science,law | UG,PG | A Russell Group university known for engineering and advanced manufacturing.
Newcastle University | Newcastle upon Tyne | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | A Russell Group university in a lively, affordable city.
University of Liverpool | Liverpool | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | A Russell Group university with a large international community.
Queen Mary University of London | London | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | A Russell Group university in East London with its own campus.
Cardiff University | Cardiff | Public | business,computing,data,engineering,health,science,law | UG,PG | Wales’s only Russell Group university.
Queen’s University Belfast | Belfast | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | A Russell Group university in Northern Ireland with lower living costs.
University of Exeter | Exeter | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | A Russell Group university with campuses in Exeter and Cornwall.
Durham University | Durham | Public | business,computing,data,engineering,finance,science,law | UG,PG | A collegiate university and one of the oldest in England.
Lancaster University | Lancaster | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | A collegiate campus university with a triple-accredited management school.
University of Surrey | Guildford | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | Known for professional training placements, 30 minutes from London.
Loughborough University | Loughborough | Public | business,computing,data,engineering,design,science | UG,PG | Known for engineering, design and sport.
University of Strathclyde | Glasgow | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | A technological university in central Glasgow.
University of Aberdeen | Aberdeen | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | Founded in 1495, and known for energy and petroleum engineering.
University of Dundee | Dundee | Public | business,computing,design,health,science,law | UG,PG | Known for life sciences, medicine and games design.
Heriot-Watt University | Edinburgh | Public | business,computing,data,engineering,finance,design | UG,PG | Known for engineering, with campuses in Dubai and Malaysia.
University of Sussex | Brighton | Public | business,computing,data,engineering,finance,science,law | UG,PG | A campus university next to the South Downs, close to Brighton.
University of Kent | Canterbury | Public | business,computing,data,engineering,finance,health,science,law | UG,PG | A campus university in the historic city of Canterbury.
University of Essex | Colchester | Public | business,computing,data,finance,health,science,law | UG,PG | Known for economics, law and data science.
Aston University | Birmingham | Public | business,computing,data,engineering,health,science | UG,PG | A city-centre campus with a triple-accredited business school.
Brunel University of London | London | Public | business,computing,data,engineering,design,health,law | UG,PG | A campus university in West London, known for engineering and design.
City St George’s, University of London | London | Public | business,computing,data,engineering,finance,health,law | UG,PG | Home of Bayes Business School, near the City of London.
Kingston University | London | Public | business,computing,data,engineering,design,health,law | UG,PG | Known for art, design and creative industries.
University of Westminster | London | Public | business,computing,data,design,law | UG,PG | Central London campuses on Regent Street and in Marylebone.
Middlesex University | London | Public | business,computing,data,design,health,law | UG,PG | A North London university with a large international community.
University of East London | London | Public | business,computing,data,engineering,health,law | UG,PG | Campuses in Stratford and Docklands, East London.
London South Bank University | London | Public | business,computing,engineering,health,design | UG,PG | Central London campus near Elephant and Castle.
University of Bedfordshire | Luton | Public | business,computing,data,health | UG,PG | Campuses in Luton and Bedford, 30 minutes from London by train.
University of Portsmouth | Portsmouth | Public | business,computing,data,engineering,health,science,law | UG,PG | A coastal city university with a London campus.
University of Salford | Salford, Greater Manchester | Public | business,computing,data,engineering,health,design | UG,PG | Next to MediaCityUK, home of the BBC and ITV.
Manchester Metropolitan University | Manchester | Public | business,computing,data,engineering,design,health,law | UG,PG | One of the UK’s largest universities, in central Manchester.
Nottingham Trent University | Nottingham | Public | business,computing,data,engineering,design,health,law | UG,PG | Known for work placements and employability.
De Montfort University | Leicester | Public | business,computing,data,engineering,design,health,law | UG,PG | City-centre campus known for creative technology.
Birmingham City University | Birmingham | Public | business,computing,data,engineering,design,health,law | UG,PG | City-centre campuses in Birmingham.
University of Huddersfield | Huddersfield | Public | business,computing,engineering,design,health | UG,PG |
University of Bradford | Bradford | Public | business,computing,data,engineering,health | UG,PG | Known for pharmacy, engineering and management.
Ulster University | Belfast | Public | business,computing,data,engineering,health,design | UG,PG | Campuses in Northern Ireland, plus London and Birmingham.
University of the West of Scotland | Paisley | Public | business,computing,data,engineering,health | UG,PG | Campuses across Scotland and in London.
Liverpool John Moores University | Liverpool | Public | business,computing,data,engineering,health,design,law | UG,PG |
Oxford Brookes University | Oxford | Public | business,computing,data,engineering,design,health,law | UG,PG | Known for architecture, business and motorsport engineering.
University of Sunderland | Sunderland | Public | business,computing,health,design | UG,PG | Campuses in Sunderland and London.
Cardiff Metropolitan University | Cardiff | Public | business,computing,design,health | UG,PG |
Swansea University | Swansea | Public | business,computing,data,engineering,health,science,law | UG,PG | A beachfront campus in Wales.
University of Roehampton | London | Public | business,computing,health | UG,PG | A parkland campus in South-West London.
University of Wolverhampton | Wolverhampton | Public | business,computing,engineering,health,law | UG,PG |
Leeds Beckett University | Leeds | Public | business,computing,data,engineering,design,health,law | UG,PG |
Ravensbourne University London | London | Public | design,computing,business | UG,PG | Specialist in digital media, design and technology, next to the O2.
University of Law | London and other cities | Private | law,business | UG,PG | A specialist university for law and business.
BPP University | London and other cities | Private | law,business,finance,health | UG,PG | Known for law, accountancy and professional qualifications.
Regent’s University London | London | Private | business,design | UG,PG | A private university inside Regent’s Park, central London.
University of Buckingham | Buckingham | Private | business,computing,health,law | UG,PG | One of the UK’s first private universities, with two-year bachelor’s degrees.
Arden University | London, Birmingham and Manchester | Private | business,computing,health | UG,PG | Study centres in several cities, with flexible blended learning.
Northeastern University London | London | Private | business,computing,data,law | UG,PG | The London campus of Northeastern University in the US.
Richmond American University London | London | Private | business,design | UG,PG | Offers both US and UK accredited degrees.
Hult International Business School | London | Private | business,finance,data | UG,PG | A global business school with campuses in London, Boston and Dubai.
`,

  usa: `
Massachusetts Institute of Technology | Cambridge, Massachusetts | Private | business,computing,data,engineering,finance,science,design | UG,PG | Among the world’s leading universities for science and engineering.
Stanford University | Stanford, California | Private | business,computing,data,engineering,health,science,law | UG,PG | In Silicon Valley, with deep links to the technology industry.
Carnegie Mellon University | Pittsburgh, Pennsylvania | Private | computing,data,engineering,business,design | UG,PG | Known worldwide for computer science, AI and robotics.
Columbia University | New York City | Private | business,computing,data,engineering,finance,health,law | UG,PG | An Ivy League university in Manhattan.
Cornell University | Ithaca, New York | Private | business,computing,data,engineering,science,law | UG,PG | An Ivy League university with a technology campus in New York City.
University of Southern California | Los Angeles | Private | business,computing,data,engineering,design,health,law | UG,PG | A large private research university popular with Indian engineering students.
New York University | New York City | Private | business,computing,data,engineering,finance,health,law | UG,PG | Home of the Stern School of Business and the Tandon School of Engineering.
Boston University | Boston, Massachusetts | Private | business,computing,data,engineering,health,law | UG,PG |
Johns Hopkins University | Baltimore, Maryland | Private | business,computing,data,engineering,health,science | UG,PG | Known worldwide for public health and medicine.
Duke University | Durham, North Carolina | Private | business,computing,data,engineering,health,law | UG,PG |
Northwestern University | Evanston, Illinois | Private | business,computing,data,engineering,health,law | UG,PG | Home of the Kellogg School of Management, near Chicago.
Drexel University | Philadelphia, Pennsylvania | Private | business,computing,data,engineering,health,design | UG,PG | Known for its co-op work-experience programme.
Syracuse University | Syracuse, New York | Private | business,computing,data,engineering,design,law | UG,PG |
Stevens Institute of Technology | Hoboken, New Jersey | Private | computing,data,engineering,finance,business | UG,PG | Across the river from Manhattan, strong in financial engineering.
Rochester Institute of Technology | Rochester, New York | Private | computing,data,engineering,design,business | UG,PG | Known for computing, cybersecurity and co-op placements.
Worcester Polytechnic Institute | Worcester, Massachusetts | Private | computing,data,engineering,business,science | UG,PG |
Rensselaer Polytechnic Institute | Troy, New York | Private | computing,data,engineering,business,science | UG,PG | One of the oldest technological universities in the US.
Pace University | New York City | Private | business,computing,data,finance,health,law | UG,PG | Campuses in Manhattan and Westchester.
Long Island University | Brooklyn and Long Island, New York | Private | business,computing,data,health | UG,PG |
New York Institute of Technology | New York City | Private | computing,data,engineering,business,health,design | UG,PG |
Saint Louis University | St Louis, Missouri | Private | business,computing,data,engineering,health,law | UG,PG |
University of New Haven | West Haven, Connecticut | Private | business,computing,data,engineering,law | UG,PG | Known for cybersecurity and forensic science.
Clark University | Worcester, Massachusetts | Private | business,data,science | UG,PG |
DePaul University | Chicago, Illinois | Private | business,computing,data,design,law | UG,PG | One of the largest Catholic universities in the US.
Loyola University Chicago | Chicago, Illinois | Private | business,computing,data,health,law | UG,PG |
Fairleigh Dickinson University | Teaneck, New Jersey | Private | business,computing,data,health | UG,PG |
Hofstra University | Hempstead, New York | Private | business,computing,engineering,health,law | UG,PG |
Case Western Reserve University | Cleveland, Ohio | Private | business,computing,data,engineering,health,law | UG,PG |
Rice University | Houston, Texas | Private | business,computing,data,engineering,science | UG,PG |
Vanderbilt University | Nashville, Tennessee | Private | business,computing,data,engineering,health,law | UG,PG |
University of Dayton | Dayton, Ohio | Private | business,computing,engineering | UG,PG |
Webster University | St Louis, Missouri | Private | business,computing,data | UG,PG |
Santa Clara University | Santa Clara, California | Private | business,computing,data,engineering,law | UG,PG | A Jesuit university in the heart of Silicon Valley.
Seattle University | Seattle, Washington | Private | business,computing,data,engineering,law | UG,PG |
Golden Gate University | San Francisco, California | Private | business,finance,law | PG |
Harrisburg University of Science and Technology | Harrisburg, Pennsylvania | Private | computing,data,business | UG,PG |
Trine University | Angola, Indiana | Private | business,computing,engineering | UG,PG |
Lawrence Technological University | Southfield, Michigan | Private | computing,engineering,design,business | UG,PG |
University of Illinois Urbana-Champaign | Urbana-Champaign, Illinois | Public | business,computing,data,engineering,finance,science,law | UG,PG | One of the top public universities for engineering and computer science.
Purdue University | West Lafayette, Indiana | Public | business,computing,data,engineering,science | UG,PG | Known for engineering, aviation and agriculture.
Texas A&M University | College Station, Texas | Public | business,computing,data,engineering,science,health | UG,PG | One of the largest universities in the US.
University of Texas at Austin | Austin, Texas | Public | business,computing,data,engineering,finance,science,law | UG,PG | A leading public university in Texas’s technology hub.
University of Michigan | Ann Arbor, Michigan | Public | business,computing,data,engineering,health,law | UG,PG |
Georgia Institute of Technology | Atlanta, Georgia | Public | computing,data,engineering,business,design | UG,PG | A top public university for engineering and computing.
University of California, San Diego | San Diego, California | Public | computing,data,engineering,business,health,science | UG,PG |
University of California, Irvine | Irvine, California | Public | computing,data,engineering,business,health,law | UG,PG |
University of California, Davis | Davis, California | Public | computing,data,engineering,business,health,science | UG,PG |
University of Washington | Seattle, Washington | Public | business,computing,data,engineering,health,law | UG,PG | Close to Microsoft and Amazon headquarters.
Pennsylvania State University | University Park, Pennsylvania | Public | business,computing,data,engineering,science | UG,PG |
Rutgers University | New Brunswick, New Jersey | Public | business,computing,data,engineering,health,law | UG,PG |
University of Maryland, College Park | College Park, Maryland | Public | business,computing,data,engineering,science | UG,PG | Near Washington, DC.
University of Florida | Gainesville, Florida | Public | business,computing,data,engineering,health,law | UG,PG |
Ohio State University | Columbus, Ohio | Public | business,computing,data,engineering,health,law | UG,PG |
Indiana University Bloomington | Bloomington, Indiana | Public | business,computing,data,science,law | UG,PG | Home of the Kelley School of Business.
Michigan State University | East Lansing, Michigan | Public | business,computing,data,engineering,science | UG,PG |
University of Minnesota | Minneapolis, Minnesota | Public | business,computing,data,engineering,health | UG,PG |
Virginia Tech | Blacksburg, Virginia | Public | business,computing,data,engineering,science | UG,PG |
North Carolina State University | Raleigh, North Carolina | Public | computing,data,engineering,business,science | UG,PG |
University of Arizona | Tucson, Arizona | Public | business,computing,data,engineering,health | UG,PG |
University of Houston | Houston, Texas | Public | business,computing,data,engineering,health | UG,PG |
University of Texas at Arlington | Arlington, Texas | Public | business,computing,data,engineering | UG,PG | Popular with Indian students for engineering and computer science.
Texas Tech University | Lubbock, Texas | Public | business,computing,data,engineering | UG,PG |
University of North Texas | Denton, Texas | Public | business,computing,data,engineering | UG,PG |
Stony Brook University | Stony Brook, New York | Public | computing,data,engineering,business,health | UG,PG |
Binghamton University | Binghamton, New York | Public | computing,data,engineering,business | UG,PG |
University at Albany | Albany, New York | Public | business,computing,data | UG,PG |
Kent State University | Kent, Ohio | Public | business,computing,data,design,health | UG,PG |
Wright State University | Dayton, Ohio | Public | computing,engineering,business | UG,PG |
University of Missouri–Kansas City | Kansas City, Missouri | Public | business,computing,engineering,health | UG,PG |
Wichita State University | Wichita, Kansas | Public | business,computing,engineering | UG,PG | Known for aerospace engineering.
University of Central Florida | Orlando, Florida | Public | business,computing,data,engineering | UG,PG |
Florida International University | Miami, Florida | Public | business,computing,data,engineering | UG,PG |
Cleveland State University | Cleveland, Ohio | Public | business,computing,engineering | UG,PG |
University of Massachusetts Amherst | Amherst, Massachusetts | Public | business,computing,data,engineering | UG,PG |
University of Massachusetts Boston | Boston, Massachusetts | Public | business,computing,data | UG,PG |
University of Massachusetts Lowell | Lowell, Massachusetts | Public | business,computing,data,engineering | UG,PG |
New Jersey Institute of Technology | Newark, New Jersey | Public | computing,data,engineering,business | UG,PG | Close to New York City, strong in computing.
University of Memphis | Memphis, Tennessee | Public | business,computing,engineering | UG,PG |
Oklahoma State University | Stillwater, Oklahoma | Public | business,computing,engineering | UG,PG |
Missouri University of Science and Technology | Rolla, Missouri | Public | computing,engineering | UG,PG |
`,

  canada: `
McGill University | Montreal, Quebec | Public | business,computing,data,engineering,health,science,law | UG,PG | One of Canada’s best-known universities.
McMaster University | Hamilton, Ontario | Public | business,computing,engineering,health,science | UG,PG | Known for health sciences and engineering.
Queen’s University | Kingston, Ontario | Public | business,computing,engineering,health,law | UG,PG |
Western University | London, Ontario | Public | business,computing,engineering,health,law | UG,PG | Home of the Ivey Business School.
University of Ottawa | Ottawa, Ontario | Public | business,computing,engineering,health,law | UG,PG | The largest English–French bilingual university in the world.
University of Calgary | Calgary, Alberta | Public | business,computing,data,engineering,health | UG,PG |
Simon Fraser University | Burnaby, British Columbia | Public | business,computing,data,engineering | UG,PG |
University of Victoria | Victoria, British Columbia | Public | business,computing,engineering,science,law | UG,PG |
York University | Toronto, Ontario | Public | business,computing,data,engineering,law | UG,PG | Home of the Schulich School of Business.
Toronto Metropolitan University | Toronto, Ontario | Public | business,computing,data,engineering,design | UG,PG | In downtown Toronto.
Concordia University | Montreal, Quebec | Public | business,computing,data,engineering,design | UG,PG |
Carleton University | Ottawa, Ontario | Public | business,computing,data,engineering | UG,PG |
University of Manitoba | Winnipeg, Manitoba | Public | business,computing,engineering,health | UG,PG |
University of Saskatchewan | Saskatoon, Saskatchewan | Public | business,computing,engineering,science | UG,PG |
Memorial University of Newfoundland | St John’s, Newfoundland | Public | business,computing,engineering,science | UG,PG | Known for relatively low tuition fees.
University of New Brunswick | Fredericton, New Brunswick | Public | business,computing,engineering | UG,PG |
Lakehead University | Thunder Bay, Ontario | Public | business,computing,engineering | UG,PG |
Brock University | St Catharines, Ontario | Public | business,computing,data | UG,PG |
University of Guelph | Guelph, Ontario | Public | business,computing,science | UG,PG | Known for agriculture and veterinary science.
Wilfrid Laurier University | Waterloo, Ontario | Public | business,computing,data | UG,PG |
Ontario Tech University | Oshawa, Ontario | Public | computing,engineering,business | UG,PG |
University of Regina | Regina, Saskatchewan | Public | business,computing,engineering | UG,PG |
Thompson Rivers University | Kamloops, British Columbia | Public | business,computing,data | UG,PG |
Cape Breton University | Sydney, Nova Scotia | Public | business,computing,health | UG,PG |
University of Prince Edward Island | Charlottetown, Prince Edward Island | Public | business,computing,science | UG,PG |
Humber Polytechnic | Toronto, Ontario | Public | business,computing,data,engineering,design,health | UG,PG | A public college offering diplomas, degrees and graduate certificates.
George Brown Polytechnic | Toronto, Ontario | Public | business,computing,design,health | UG,PG | Campuses in downtown Toronto.
Centennial College | Toronto, Ontario | Public | business,computing,engineering,health | UG,PG |
Sheridan College | Oakville, Ontario | Public | business,computing,design | UG,PG | Known for animation and design.
Fanshawe College | London, Ontario | Public | business,computing,engineering,health | UG,PG |
Algonquin College | Ottawa, Ontario | Public | business,computing,engineering,health | UG,PG |
Durham College | Oshawa, Ontario | Public | business,computing,data | UG,PG |
Lambton College | Sarnia, Ontario | Public | business,computing,data,engineering | UG,PG |
St. Clair College | Windsor, Ontario | Public | business,computing,health | UG,PG |
Niagara College | Welland, Ontario | Public | business,computing,health | UG,PG |
Georgian College | Barrie, Ontario | Public | business,computing,health | UG,PG |
Mohawk College | Hamilton, Ontario | Public | business,computing,engineering | UG,PG |
Douglas College | New Westminster, British Columbia | Public | business,computing,health | UG,PG |
Langara College | Vancouver, British Columbia | Public | business,computing,data | UG,PG |
British Columbia Institute of Technology | Burnaby, British Columbia | Public | business,computing,engineering,health | UG,PG |
Southern Alberta Institute of Technology | Calgary, Alberta | Public | business,computing,engineering | UG,PG |
University Canada West | Vancouver, British Columbia | Private | business,computing | UG,PG | A private university known for its MBA. Check work-permit eligibility before applying.
Yorkville University | Toronto and Vancouver | Private | business,design | UG,PG | Check work-permit eligibility before applying.
Trinity Western University | Langley, British Columbia | Private | business,computing,health | UG,PG | A private Christian university.
New York Institute of Technology – Vancouver | Vancouver, British Columbia | Private | computing,data | PG | Check work-permit eligibility before applying.
Fairleigh Dickinson University – Vancouver | Vancouver, British Columbia | Private | business,computing | UG,PG | Check work-permit eligibility before applying.
Northeastern University – Toronto and Vancouver | Toronto and Vancouver | Private | computing,data,business | PG | Check work-permit eligibility before applying.
University of Niagara Falls Canada | Niagara Falls, Ontario | Private | business,computing,data | UG,PG | Check work-permit eligibility before applying.
`,

  australia: `
Australian National University | Canberra | Public | business,computing,data,engineering,science,law | UG,PG | Australia’s national university and a Group of Eight member.
University of Sydney | Sydney | Public | business,computing,data,engineering,health,science,law,design | UG,PG | Australia’s first university and a Group of Eight member.
University of Queensland | Brisbane | Public | business,computing,data,engineering,health,science,law | UG,PG | A Group of Eight university.
University of Western Australia | Perth | Public | business,computing,data,engineering,health,science,law | UG,PG | A Group of Eight university.
Adelaide University | Adelaide | Public | business,computing,data,engineering,health,science,law,design | UG,PG | Formed in 2026 by merging the University of Adelaide and the University of South Australia.
Macquarie University | Sydney | Public | business,computing,data,engineering,finance,health | UG,PG | Next to Sydney’s Macquarie Park business district.
La Trobe University | Melbourne | Public | business,computing,data,engineering,health | UG,PG |
Swinburne University of Technology | Melbourne | Public | business,computing,data,engineering,design | UG,PG |
Griffith University | Brisbane and Gold Coast | Public | business,computing,data,engineering,health | UG,PG |
Queensland University of Technology | Brisbane | Public | business,computing,data,engineering,design,health | UG,PG |
Curtin University | Perth | Public | business,computing,data,engineering,health | UG,PG | Known for mining and engineering.
Western Sydney University | Sydney | Public | business,computing,data,engineering,health | UG,PG |
University of Newcastle | Newcastle, New South Wales | Public | business,computing,engineering,health | UG,PG |
Flinders University | Adelaide | Public | business,computing,engineering,health | UG,PG |
James Cook University | Townsville and Cairns | Public | business,computing,health,science | UG,PG |
Charles Darwin University | Darwin | Public | business,computing,engineering,health | UG,PG |
Charles Sturt University | New South Wales | Public | business,computing,health | UG,PG |
Federation University Australia | Ballarat | Public | business,computing,engineering | UG,PG |
Victoria University | Melbourne | Public | business,computing,engineering,health | UG,PG | Teaches in short single-subject blocks.
University of Canberra | Canberra | Public | business,computing,data,health | UG,PG |
CQUniversity | Queensland and other cities | Public | business,computing,engineering,health | UG,PG |
Edith Cowan University | Perth | Public | business,computing,data,health | UG,PG | Known for cybersecurity.
Murdoch University | Perth | Public | business,computing,health,science | UG,PG |
University of Tasmania | Hobart | Public | business,computing,health,science | UG,PG |
Southern Cross University | Gold Coast and Lismore | Public | business,computing,health | UG,PG |
University of New England | Armidale, New South Wales | Public | business,computing,science | UG,PG |
University of the Sunshine Coast | Sunshine Coast, Queensland | Public | business,computing,health | UG,PG |
Australian Catholic University | Several cities | Public | business,health | UG,PG |
Bond University | Gold Coast | Private | business,computing,health,law | UG,PG | Australia’s first private university, with two-year bachelor’s degrees.
University of Notre Dame Australia | Fremantle and Sydney | Private | business,health,law | UG,PG |
Torrens University Australia | Adelaide, Melbourne, Sydney and Brisbane | Private | business,computing,design,health | UG,PG |
Avondale University | Lake Macquarie, New South Wales | Private | business,health | UG,PG |
Kaplan Business School | Several cities | Private | business,finance | UG,PG | A private higher-education provider focused on business.
`,

  germany: `
Ludwig Maximilian University of Munich | Munich | Public | business,computing,data,health,science,law | UG,PG | One of Germany’s leading research universities.
Heidelberg University | Heidelberg | Public | computing,data,health,science,law | UG,PG | Germany’s oldest university. Baden-Württemberg charges non-EU tuition fees.
Humboldt University of Berlin | Berlin | Public | business,computing,data,science,law | UG,PG |
Free University of Berlin | Berlin | Public | business,computing,data,science,law | UG,PG |
Karlsruhe Institute of Technology | Karlsruhe | Public | computing,data,engineering,science,business | UG,PG | A TU9 member. Baden-Württemberg charges non-EU tuition fees.
Technical University of Darmstadt | Darmstadt | Public | computing,data,engineering,science | UG,PG | A TU9 member near Frankfurt.
Dresden University of Technology | Dresden | Public | computing,data,engineering,science | UG,PG | A TU9 member and one of Germany’s Universities of Excellence.
Leibniz University Hannover | Hannover | Public | computing,engineering,science | UG,PG | A TU9 member.
Technical University of Braunschweig | Braunschweig | Public | computing,engineering,science | UG,PG | A TU9 member, strong in automotive and aerospace.
University of Hamburg | Hamburg | Public | business,computing,data,science,law | UG,PG |
Hamburg University of Technology | Hamburg | Public | computing,data,engineering | PG |
University of Bonn | Bonn | Public | business,computing,data,science,law | UG,PG |
University of Cologne | Cologne | Public | business,computing,data,science,law | UG,PG |
Goethe University Frankfurt | Frankfurt | Public | business,finance,computing,data,science,law | UG,PG | In Germany’s financial capital.
University of Freiburg | Freiburg | Public | computing,engineering,science | UG,PG | Baden-Württemberg charges non-EU tuition fees.
University of Göttingen | Göttingen | Public | business,computing,data,science | UG,PG |
University of Duisburg-Essen | Duisburg and Essen | Public | business,computing,data,engineering | UG,PG |
TU Dortmund University | Dortmund | Public | computing,data,engineering,science | UG,PG |
Ilmenau University of Technology | Ilmenau | Public | computing,engineering | UG,PG |
University of Siegen | Siegen | Public | business,computing,engineering | UG,PG |
University of Passau | Passau | Public | business,computing,data,law | UG,PG |
Rhine-Waal University of Applied Sciences | Kleve | Public | business,computing,engineering,science | UG,PG | Most of its courses are taught in English.
Hof University of Applied Sciences | Hof | Public | business,computing,engineering | UG,PG |
Deggendorf Institute of Technology | Deggendorf | Public | business,computing,data,engineering,health | UG,PG |
Technische Hochschule Ingolstadt | Ingolstadt | Public | business,computing,engineering | UG,PG | Close to Audi’s headquarters.
SRH University | Berlin, Heidelberg and other cities | Private | business,computing,data,engineering,design,health | UG,PG | A large private university group with many English-taught courses.
IU International University of Applied Sciences | Berlin and other cities | Private | business,computing,data,engineering,design,health | UG,PG | Germany’s largest university by enrolment, with online and campus study.
GISMA University of Applied Sciences | Potsdam and Berlin | Private | business,computing,data | UG,PG |
Berlin School of Business and Innovation | Berlin | Private | business,computing,data | UG,PG |
Arden University Berlin | Berlin | Private | business,computing | UG,PG |
Constructor University | Bremen | Private | business,computing,data,engineering,science | UG,PG | An English-speaking residential campus, formerly Jacobs University.
Frankfurt School of Finance & Management | Frankfurt | Private | finance,business,data | UG,PG | A leading business school for finance.
WHU – Otto Beisheim School of Management | Vallendar and Düsseldorf | Private | business,finance | UG,PG |
ESMT Berlin | Berlin | Private | business,data | PG | A business school founded by major German companies.
University of Europe for Applied Sciences | Berlin, Hamburg and Potsdam | Private | business,computing,data,design | UG,PG |
Macromedia University of Applied Sciences | Several cities | Private | business,design | UG,PG | Known for media, design and management.
Schiller International University | Heidelberg | Private | business,finance | UG,PG |
EU Business School | Munich | Private | business,finance | UG,PG |
International School of Management | Dortmund and other cities | Private | business,finance | UG,PG |
CODE University of Applied Sciences | Berlin | Private | computing,design,business | UG | A project-based university for software, design and product management.
Munich Business School | Munich | Private | business | UG,PG |
HHL Leipzig Graduate School of Management | Leipzig | Private | business,finance | PG |
Hochschule Fresenius | Several cities | Private | business,design,health | UG,PG |
FOM University of Applied Sciences | Several cities | Private | business,computing,health | UG,PG |
`,

  ireland: `
Maynooth University | Maynooth, near Dublin | Public | business,computing,data,engineering,science | UG,PG |
Technological University Dublin | Dublin | Public | business,computing,data,engineering,design,health,science | UG,PG | Ireland’s first technological university.
Atlantic Technological University | Galway, Sligo and Donegal | Public | business,computing,engineering,health | UG,PG |
Munster Technological University | Cork and Kerry | Public | business,computing,data,engineering | UG,PG |
South East Technological University | Waterford and Carlow | Public | business,computing,engineering,science | UG,PG |
Technological University of the Shannon | Limerick and Athlone | Public | business,computing,engineering,health | UG,PG |
Dundalk Institute of Technology | Dundalk | Public | business,computing,engineering | UG,PG |
RCSI University of Medicine and Health Sciences | Dublin | Private | health | UG,PG | A specialist university for medicine, pharmacy and health sciences.
Griffith College | Dublin, Cork and Limerick | Private | business,computing,design,law | UG,PG | Ireland’s largest independent college.
Dublin Business School | Dublin | Private | business,computing,data,finance,law | UG,PG |
CCT College Dublin | Dublin | Private | computing,data,business | UG,PG |
Independent College Dublin | Dublin | Private | business,computing,law | UG,PG |
ICD Business School | Dublin | Private | business,finance | UG |
Dorset College Dublin | Dublin | Private | business,computing | UG,PG |
`,

  france: `
PSL University | Paris | Public | business,computing,data,science,engineering | UG,PG | A group of leading Paris institutions, including ENS and Dauphine.
Institut Polytechnique de Paris | Palaiseau, near Paris | Public | computing,data,engineering,finance,science | UG,PG | Brings together École Polytechnique, Télécom Paris and other engineering schools.
Université Paris Cité | Paris | Public | health,science,computing,law | UG,PG |
Université Grenoble Alpes | Grenoble | Public | computing,data,engineering,science | UG,PG |
University of Strasbourg | Strasbourg | Public | business,computing,health,science,law | UG,PG |
Aix-Marseille University | Marseille and Aix-en-Provence | Public | business,computing,health,science,law | UG,PG | One of the largest universities in the French-speaking world.
Université Côte d’Azur | Nice | Public | business,computing,data,science | UG,PG |
Claude Bernard University Lyon 1 | Lyon | Public | computing,health,science | UG,PG |
University of Montpellier | Montpellier | Public | business,health,science,law | UG,PG |
University of Bordeaux | Bordeaux | Public | computing,health,science,law | UG,PG |
INSA Lyon | Lyon | Public | computing,engineering | UG,PG | A leading public engineering school.
ISAE-SUPAERO | Toulouse | Public | engineering | PG | A specialist school for aerospace engineering, in Europe’s aerospace capital.
ESCP Business School | Paris | Private | business,finance,data | UG,PG | One of the world’s oldest business schools, with campuses across Europe.
emlyon business school | Lyon and Paris | Private | business,finance,data | UG,PG |
NEOMA Business School | Reims, Rouen and Paris | Private | business,finance,data | UG,PG |
KEDGE Business School | Marseille, Bordeaux and Paris | Private | business,finance | UG,PG |
Grenoble Ecole de Management | Grenoble and Paris | Private | business,finance,data | UG,PG |
Toulouse Business School | Toulouse | Private | business,finance | UG,PG |
Audencia | Nantes | Private | business,finance,data | UG,PG |
IESEG School of Management | Lille and Paris | Private | business,finance,data | UG,PG |
Rennes School of Business | Rennes | Private | business,finance | UG,PG | Most of its courses are taught in English.
Montpellier Business School | Montpellier | Private | business,finance | UG,PG |
PSB Paris School of Business | Paris | Private | business,finance,data | UG,PG |
ISC Paris Business School | Paris | Private | business,finance | UG,PG |
Excelia Business School | La Rochelle and Paris | Private | business | UG,PG |
EM Normandie | Caen, Le Havre and Paris | Private | business,finance | UG,PG |
ESSCA School of Management | Angers, Paris and other cities | Private | business,finance | UG,PG |
ESILV (De Vinci Engineering School) | Paris-La Défense | Private | computing,data,engineering,finance | UG,PG |
INSEAD | Fontainebleau | Private | business | PG | A leading global business school, known for its one-year MBA.
`,

  nz: `
Unitec | Auckland | Public | business,computing,engineering,design,health | UG,PG | A polytechnic offering practical, career-focused courses.
Manukau Institute of Technology | Auckland | Public | business,computing,engineering,health | UG,PG |
Wintec | Hamilton | Public | business,computing,engineering,health | UG,PG |
Otago Polytechnic | Dunedin | Public | business,computing,design,health | UG,PG |
Ara Institute of Canterbury | Christchurch | Public | business,computing,engineering,health | UG,PG |
Eastern Institute of Technology | Napier | Public | business,computing,health | UG,PG |
Southern Institute of Technology | Invercargill | Public | business,computing,engineering | UG,PG |
Toi Ohomai Institute of Technology | Tauranga and Rotorua | Public | business,computing,health | UG,PG |
Whitireia and WelTec | Wellington | Public | business,computing,engineering,health | UG,PG |
Nelson Marlborough Institute of Technology | Nelson | Public | business,computing,health | UG,PG |
Yoobee Colleges | Auckland, Wellington and Christchurch | Private | computing,design | UG,PG | A private college for design, animation and IT.
Whitecliffe | Auckland and Wellington | Private | design,computing | UG,PG | A private college for art, design and technology.
ICL Business School | Auckland | Private | business,computing | UG,PG |
`,
  europe: `
Politecnico di Milano | Milan, Italy | Public | engineering,design,computing,data,business | UG,PG | Italy’s leading technical university, known for engineering, architecture and design.
University of Bologna | Bologna, Italy | Public | business,computing,data,engineering,health,science,law | UG,PG | Founded in 1088, the oldest university in continuous operation.
Sapienza University of Rome | Rome, Italy | Public | computing,data,engineering,health,science | UG,PG | One of the largest universities in Europe.
University of Padua | Padua, Italy | Public | computing,data,engineering,health,science | UG,PG |
Politecnico di Torino | Turin, Italy | Public | engineering,computing,data,design | UG,PG | Known for automotive and aerospace engineering.
University of Milan | Milan, Italy | Public | business,computing,data,health,science,law | UG,PG |
Bocconi University | Milan, Italy | Private | business,finance,data,law | UG,PG | One of Europe’s best-known universities for economics and management.
Università Cattolica del Sacro Cuore | Milan and Rome, Italy | Private | business,finance,health | UG,PG |
LUISS Guido Carli | Rome, Italy | Private | business,finance,law | UG,PG |
Domus Academy | Milan, Italy | Private | design,business | PG | A postgraduate school for fashion and design.
Delft University of Technology | Delft, Netherlands | Public | engineering,computing,data,design | UG,PG | The Netherlands’ leading technical university.
University of Amsterdam | Amsterdam, Netherlands | Public | business,computing,data,science,law | UG,PG |
Erasmus University Rotterdam | Rotterdam, Netherlands | Public | business,finance,health,law | UG,PG | Home of the Rotterdam School of Management.
Eindhoven University of Technology | Eindhoven, Netherlands | Public | engineering,computing,data,design | UG,PG |
University of Twente | Enschede, Netherlands | Public | engineering,computing,data,business | UG,PG |
Leiden University | Leiden and The Hague, Netherlands | Public | computing,data,science,law | UG,PG | The Netherlands’ oldest university.
Utrecht University | Utrecht, Netherlands | Public | computing,data,health,science,law | UG,PG |
Maastricht University | Maastricht, Netherlands | Public | business,data,health,law | UG,PG | Known for small-group, problem-based teaching.
Wageningen University & Research | Wageningen, Netherlands | Public | science,health | UG,PG | A world leader in agriculture, food and environmental science.
Nyenrode Business University | Breukelen, Netherlands | Private | business,finance | PG |
University of Barcelona | Barcelona, Spain | Public | business,computing,health,science,law | UG,PG |
Autonomous University of Madrid | Madrid, Spain | Public | computing,health,science,law | UG,PG |
IE University | Madrid and Segovia, Spain | Private | business,finance,data,computing,design,law | UG,PG | Home of IE Business School.
ESADE | Barcelona, Spain | Private | business,finance,law | UG,PG |
EU Business School Barcelona | Barcelona, Spain | Private | business,finance | UG,PG |
KTH Royal Institute of Technology | Stockholm, Sweden | Public | engineering,computing,data,science | UG,PG | Sweden’s largest technical university.
Lund University | Lund, Sweden | Public | business,computing,data,engineering,health,science | UG,PG |
Chalmers University of Technology | Gothenburg, Sweden | Private | engineering,computing,data,science | UG,PG | A technical university run by a foundation.
Uppsala University | Uppsala, Sweden | Public | computing,data,health,science,law | UG,PG | Founded in 1477.
Linköping University | Linköping, Sweden | Public | computing,data,engineering,health | UG,PG |
University of Helsinki | Helsinki, Finland | Public | computing,data,science,health,law | UG,PG | Finland’s oldest and largest university.
Aalto University | Espoo, Finland | Public | business,computing,data,engineering,design | UG,PG | Known for combining technology, business and design.
Tampere University | Tampere, Finland | Public | computing,data,engineering,health | UG,PG |
Technical University of Denmark | Lyngby, Denmark | Public | engineering,computing,data,science | UG,PG |
University of Copenhagen | Copenhagen, Denmark | Public | computing,data,health,science,law | UG,PG |
Aarhus University | Aarhus, Denmark | Public | business,computing,engineering,health,science | UG,PG |
University of Warsaw | Warsaw, Poland | Public | business,computing,data,science,law | UG,PG |
Warsaw University of Technology | Warsaw, Poland | Public | engineering,computing,data | UG,PG |
Kozminski University | Warsaw, Poland | Private | business,finance | UG,PG | A triple-accredited business school.
Vistula University | Warsaw, Poland | Private | business,computing | UG,PG |
Vilnius University | Vilnius, Lithuania | Public | business,computing,health,law | UG,PG |
Riga Technical University | Riga, Latvia | Public | engineering,computing,business | UG,PG |
University of Malta | Msida, Malta | Public | business,computing,health,law | UG,PG | An English-speaking country inside the EU.
University of Cyprus | Nicosia, Cyprus | Public | business,computing,engineering,science | UG,PG |
University of Nicosia | Nicosia, Cyprus | Private | business,computing,health | UG,PG |
Budapest University of Technology and Economics | Budapest, Hungary | Public | engineering,computing,business | UG,PG |
University of Debrecen | Debrecen, Hungary | Public | business,computing,engineering,health | UG,PG |
Semmelweis University | Budapest, Hungary | Public | health | UG,PG | A specialist university for medicine and health sciences.
ETH Zurich | Zurich, Switzerland | Public | engineering,computing,data,science | UG,PG | Among the world’s leading universities for science and engineering.
EPFL | Lausanne, Switzerland | Public | engineering,computing,data,science | UG,PG |
EHL Hospitality Business School | Lausanne, Switzerland | Private | business | UG,PG | A leading school for hospitality management.
Les Roches | Crans-Montana, Switzerland | Private | business | UG,PG | A private hospitality management school.
TU Wien | Vienna, Austria | Public | engineering,computing,data,science | UG,PG |
University of Vienna | Vienna, Austria | Public | business,computing,data,science,law | UG,PG |
Modul University Vienna | Vienna, Austria | Private | business,data | UG,PG |
KU Leuven | Leuven, Belgium | Public | business,computing,data,engineering,health,science,law | UG,PG |
Ghent University | Ghent, Belgium | Public | computing,engineering,health,science | UG,PG |
Vlerick Business School | Ghent, Leuven and Brussels, Belgium | Private | business,finance | PG |
Czech Technical University in Prague | Prague, Czech Republic | Public | engineering,computing,data | UG,PG |
Charles University | Prague, Czech Republic | Public | computing,health,science,law | UG,PG |
University of Lisbon | Lisbon, Portugal | Public | business,computing,engineering,health,science | UG,PG |
University of Porto | Porto, Portugal | Public | business,computing,engineering,health,science | UG,PG |
`,
};

const more = [];
for (const [country, text] of Object.entries(lists)) {
  text
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .forEach((line) => {
      const parts = line.split('|').map((x) => x.trim());
      if (parts.length < 5) throw new Error(`Line needs at least 5 parts: "${line}"`);
      const [name, city, type, subjectList, levelList, point = ''] = parts;
      if (!['Public', 'Private'].includes(type)) throw new Error(`Type must be Public or Private: "${line}"`);
      more.push({
        country,
        name,
        city,
        type,
        point,
        subjects: subjectList.split(',').map((x) => x.trim()),
        levels: levelList.split(',').map((x) => x.trim()),
      });
    });
}

module.exports = { more };
