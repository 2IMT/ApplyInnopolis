import Card from './components/card'
import Button from './components/button'

interface FetchedTest {
  Id: number;
  Name: string;
  Time: number;
  Attempts: number;
}

interface FetchedTests {
  Tests: FetchedTest[];
}

function Test(test: FetchedTest) {
  return (
    <Card heading={test.Name} body={<span>
      Time: {test.Time} min<br />
      Attempts: {test.Attempts}<br />
      <Button text="START" inputType="button" />
    </span>} />
  )
}

function fetchTests() {

  return fetch('https://cybertoad.ru/api/tests/getTests', { cache: "no-store" })
    .then(response => response.json())
    .then(response => {
      return response as FetchedTests;
    })
}

async function Tests() {
  try {
    const tests = await fetchTests();

    tests.Tests.sort((a, b) => (a.Time - b.Time));

    let testsList: JSX.Element[] = [];

    for (let i = 0; i < tests.Tests.length; i++) {
      const element = Test(tests.Tests[i]);

      testsList.push(element);
    }

    return testsList;
  }
  catch (e)
  {
    return (
      <main>
        Could not fetch tests.
      </main>
    )
  }
}

export default function Home() {
  return (
    <main>
      <Tests />
    </main>
  )
}
