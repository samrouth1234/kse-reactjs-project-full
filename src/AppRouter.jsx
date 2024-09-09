import {
  Route,
  Routes,
} from "react-router-dom";
import { ABOUT_US, HOME_PAGE, SERVICE } from "./constants/Routes";
import HomePage from "./page/home/HomePage";
import AboutUs from "./page/about-us/AboutUs";
import Service from "./page/service/Service";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={HOME_PAGE} element={<HomePage/>} />
      <Route path={ABOUT_US} element={<AboutUs/>} />
      <Route path={SERVICE} element={<Service/>} />
    </Routes>
  );
}

/**
 * 
  <Route element={<AppLayout />}>
    <Route
      path={SOMETHING_WENT_WRONG}
      element={<SomethingWentWrongPage />}
    />
    <Route path={ROOT_ROUTE} element={<LandingPage />} />
  </Route>

  <Route element={<AppLayoutGlobal/>}>
    <Route path={PRIVACY_POLICY_PAGE} element={<PrivacyPolicyPage/>}/>
    <Route path={TERMS_PAGE} element={<TermsPage/>} />
  </Route>

  <Route element={<TemplateLayout />}>
    <Route path={TEMPLATE_PAGE} element={<Templates />} />
    <Route path={TEMPLATE_UPLOAD} element={<TemplateUpload />} />
    <Route path={TEMPLATE_DETAIL + '/:templateUuid'} element={<TemplateDetailPage />} />
    <Route path={TEMPLATE_BUILD} element={<BuildTemplate />} />
    <Route path={FIND_FILE_URL + '/:filename'} element={<ViewFileGenerated />} />
  </Route>
 */

