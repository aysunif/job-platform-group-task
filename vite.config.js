import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "/src/pages/index.html",
        about: "/src/pages/about.html",
        addJob: "/src/pages/addJob.html",
        companies: "/src/pages/companies.html",
        detailsVacancies: "/src/pages/detailsVacancies.html",
        login: "/src/pages/login.html",
        register: "/src/pages/register.html",
        usersDetails: "/src/pages/usersDetails.html",
        users: "/src/pages/users.html",
        viewVacations: "/src/pages/viewVacations.html",
      },
    },
  },
});
