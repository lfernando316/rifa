const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/tarjeton", component: () => import("pages/TarjetaRifa.vue") },
      { path: "/numeros", component: () => import("pages/FormNumeros.vue") },
      { path: "/tarjetonv2", component: () => import("pages/v2tarjeton.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
