/* ТОЧКА ВХОДУ ЗАСТОСУНКА. З цього файлу починається виконання JS-коду: його підключає index.html
   через <script type="module" src="/src/main.tsx">. Тут React "приєднується" до звичайної HTML-сторінки */

// createRoot — функція з react-dom/client. Створює "корінь" React: місце в DOM, всередині якого React керує всім інтерфейсом
import {createRoot} from 'react-dom/client'
// Підключення глобальних стилів. Імпорт без імені (без {...} і from): нам потрібні не значення з файлу, а лише його побічний ефект — стилі на сторінці
import './index.css'
// Provider — компонент з react-redux. Робить redux-стор доступним для всіх компонентів всередині нього (через useSelector / useDispatch)
import {Provider} from "react-redux";
// RouterProvider — компонент з react-router. Отримує готовий роутер, дивиться на поточну адресу в браузері і малює відповідну сторінку
import {RouterProvider} from "react-router";
// routes — наш роутер (результат createBrowserRouter), в якому описані всі маршрути. Розширення .tsx вказуємо явно, бо так вимагає налаштування збірки
import {routes} from "./routes/router.tsx";
// store — наш redux-стор, створений через configureStore. Містить стан юзерів, постів і коментарів
import {store} from "./redux/store.ts";

/* Як це працює по кроках:
   1) document.getElementById('root') — шукає в index.html елемент <div id="root"></div>. Це порожній контейнер, куди React вставить весь застосунок.
   2) Знак "!" після виклику (non-null assertion) — це підказка для TypeScript, а не код, що працює в браузері.
      getElementById повертає HTMLElement | null (елемента могло б не бути), а createRoot null не приймає.
      "!" каже: "я гарантую, що елемент є". Перевірки він не робить: якби в index.html не було #root, застосунок би впав з помилкою.
   3) createRoot(...) — створює корінь React у цьому контейнері.
   4) .render(...) — малює в корені те, що ми передали. Це все, що рендериться "ззовні":
      - <Provider store={store}> — зовнішня обгортка. Атрибут store — наш стор, який ми віддаємо всьому дереву компонентів
      - <RouterProvider router={routes}/> — всередині нього. Атрибут router — наш роутер з описаними маршрутами. Тег самозакритий, бо дітей не має.
        RouterProvider сам обирає, яку сторінку показати за адресою (/users, /posts ...)
   Порядок важливий: Provider зовні, щоб стор був доступний усім сторінкам, які малює RouterProvider.
   ВАЖЛИВО: компонент App тут НЕ рендериться напряму (на відміну від стандартного шаблону Vite, де main.tsx малює <App/>).
   Замість цього render малює роутер, а App підключається в router.tsx як елемент батьківського маршруту "/" (як спільний шаблон сторінки з меню) */
createRoot(document.getElementById('root')!).render(<Provider store={store}>
    <RouterProvider router={routes}/>

</Provider>);
