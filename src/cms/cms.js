import CMS from 'netlify-cms-app';
import LinkFileComponent from "./components/linkFileComponent"
import LinkFileButtonComponent from "./components/linkFileButtonComponent"

CMS.registerEditorComponent(LinkFileComponent);
CMS.registerEditorComponent(LinkFileButtonComponent);

// https://github.com/netlify/netlify-cms/issues/1737 and HELIO-3241
window.CMS_MANUAL_INIT = true;

if (process.env.BRANCH === "preview") {
  console.log("---- USING PREVIEW BACKEND ----")
  CMS.init({
    config: {
      backend: {
        name: 'gitlab',
        repo: 'michigan-publishing/about-bridwell',
        branch: 'preview',
        auth_type: 'pkce',
        app_id: '80d4d50a58055640e90d01ddb39f58ce6248a8f1153d9068df828230488536b7',
        api_root: 'https://gitlab.umich.edu/api/v4',
        base_url: 'https://gitlab.umich.edu',
        auth_endpoint: 'oauth/authorize'
      }
    }
  });
} else {
  CMS.init({
    config: {
      backend: {
        name: 'gitlab',
        repo: 'michigan-publishing/about-bridwell',
        branch: 'main',
        auth_type: 'pkce',
        app_id: '80d4d50a58055640e90d01ddb39f58ce6248a8f1153d9068df828230488536b7',
        api_root: 'https://gitlab.umich.edu/api/v4',
        base_url: 'https://gitlab.umich.edu',
        auth_endpoint: 'oauth/authorize'
      }
    }
  });
}
