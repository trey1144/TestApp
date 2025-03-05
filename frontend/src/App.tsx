import './App.css';

const bandNames = [
  {
    name: 'Dire Straits',
    members: 'Mark Knopfler, John Illsley, Pick Withers, David Knopfler',
    formed: 1977,
  },
  {
    name: 'R.E.M.',
    members: 'Michael Stipe, Peter Buck, Mike Mills, Bill Berry',
    formed: 1980,
  },
  {
    name: 'Collective Soul',
    members: 'Ed Roland, Dean Roland, Will Turpin, Johnny Rabb, Jesse Triplett',
    formed: 1992,
  },
  {
    name: 'Traffic',
    members: 'Steve Winwood, Jim Capaldi, Chris Wood, Dave Mason',
    formed: 1967,
  },
];

function Welcome() {
  return <h1>Criminally Underrated Bands</h1>;
}

function Band({
  name,
  members,
  formed,
}: {
  name: string;
  members: string;
  formed: number;
}) {
  return (
    <>
      <img />
      <h2>{name}</h2>
      <h3>Original Members: {members}</h3>
      <h3>Formed: {formed}</h3>
    </>
  );
}

function BandList() {
  return (
    <>
      {bandNames.map((singleBand) => {
        <Band {...singleBand} />;
      })}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <BandList />
    </>
  );
}

export default App;
