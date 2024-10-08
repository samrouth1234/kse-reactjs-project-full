import Seo from "../../components/seo/SEO";
import Tabs from "../../components/tabs/Tebs";

const HomePage = () => {

  const tabItem = [
    {
      key: '1',
      label: 'RESPONSES',
      children: "Content of Tab Pane 1",
    },
    {
      key: '2',
      label: 'SUMMARY',
      children: 'Content of Tab Pane 2',
    }
  ];

  return(
    <div>
      <Seo title="KSE | Home Page" description="This is the home page" />
      <h1>Home Page</h1>
      <Tabs tabs={tabItem} />
    </div>
  )
}
export default HomePage;