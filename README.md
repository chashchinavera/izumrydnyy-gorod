### `Изумрудный город. Frontend`

**Яндекс мастерская**

## Описание проекта

Проект представляет собой сайт центра адаптации и развития "Изумрудный город."
Структура проекта создана по методологии Feature-Sliced Design.
В проекте используются технологии: Node.js, Next.js (14.0.4) c App роутингом, React.js как базовый фреймворк, верстка - Tailwind.css (3.3.0), линтер Eslint (8), базовая логика написана на TypeScript(5).

## Системные требования

Для работы проекта нужно установить версию Node.js 18.17 или более позднюю.
Операционная система на вашем компьютере должна быть macOS, Windows (включая WSL), или Linux.

## Установка и запуск проекта

- Установите зависимости командой `npm i`
- Запуск в режиме разработки `next dev`
  По умолчанию в режиме разработки приложение запустится на порту 3000 (http://localhost:3000).
  Для того, чтобы это поменять используйте: `npx next dev -p 4000`, либо `PORT=4000 npx next dev` (для запуска на порту 4000).
- Сборка проекта в продакшен `next build`
- Запуск в режиме продакшен `next start`
- Запуск проверки линтером `next lint`

## Палитра цветов Tailwind в проекте

- white - "#fff"
- black - "#000"
- turquoise-dark - "#002A33"
- turquoise-light - "#007084"
- red - "#E50000"
- blue-light - "#D4F3F4"
- blue-medium - "#7FC9CA"
- blue-dark1 - "#00ADB1"
- blue-dark2 - "#009FA6"
- blue-gray - "#505050"  


## UI_Kit

### `<Button>`

**Для подключения компонента импортируем его по дефолту**

**Компонент принимает в качестве пропсов следующие значения:**

- 1. variant (Вариант кнопки) принимает "regular-1" | "regular-2" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2"
- 2. arrowColor (Цвет стрелки) принимает "default" | "primary" | "secondary" (не обязательный)
- 3. withArrow (Наличие стрелки) принимает булево значение
- 4. sizeArrow (Размер стрелки) принимает "primary" | "secondary" (не обязательный)
- 5. Наледует все дефолтные атрибуты от кнопки
- 6. Принимает дополнительные стили в качестве className

**Описание возможных значений пропсов:**

**variant - "regular-1" | "regular-2" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2"**

- regular 1 - Кнопка с рамкой и расстоянием между стрелкой 20px. Цвет рамки и текста внутри устанавливается свойством text-нужный_цвет непосредственно в className.
- regular-2 - Кнопка с рамкой и расстоянием между стрелкой 40px. Цвет рамки и текста внутри устанавливается свойством text-нужный_цвет непосредственно в className.
- primary-1 - Кнопка "Подробнее" с красной заливкой. Цвет и размер текста устанавливается непосредственно в className
- primary-2 - Кнопка "Подробнее" с зеленой заливкой. Цвет и размер текста устанавливается непосредственно в className
- secondary-1 - кнопка "Поддержать" с зеленой заливкой. Ширина кнопки, размер и цвет текста устанавливается непосредственно в className
- secondary-2 - кнопка "Поддержать" с темно-синей заливкой. Ширина кнопки, размер и цвет текста устанавливается непосредственно в className

**arrowColor - "default" | "primary" | "secondary" (не обязательный)**

- default - белый цвет стрелки
- primary - красный цвет стрелки
- secondary - зеленый цвет стрелки

**sizeArrow - "primary" | "secondary" (не обязательный)**

- primary - короткая стрелка
- secondary - длинная стрелка

**withArrow - boolean**

- true - стрелка есть
- false - стрелки нет

**Текст кнопки указывается между открывающим и закрывающим тегом Button**

**Пример использования (Кнопка "Подробнее" с красной заливкой и длинной стрелкой, gap 20px, белый цвет текста)**

```
import Button from "../src/shared/ui/Button/Button";

      <Button
        variant="primary-1"
        arrowColor="default"
        withArrow={true}
        sizeArrow="secondary"
        className="text-white"
      >
        Подробнее
      </Button>
```

### Кнопки переключения слайдов - компонент `SwipeButton`

`SwipeButton` - компонент кнопки переключения слайдов для использования в слайдерах или каруселях. По умолчанию имеет переключение цвета фона при наведении с `white` на `blue-light`

**Пропсы:**

    **direction - "left" | "right"**

- "left" - направление стрелки налево
- "right" - направление стрелки направо

**Пример использования кнопки переключения слайдов со стрелкой влево:**

```tsx
const MyComponent = () => {
  return (
    <SwipeButton
      direction="left"
      onClick={() => console.log("Left button clicked")}
    ></SwipeButton>
  );
};
```

### Кнопки пагинации - компонент `PaginationButton`

`PaginationButton` - компонент кнопки переключения страниц с новостями. По умолчанию имеет переключение цвета фона при наведении с `white` на `blue-light` в десктопном разрешении экрана. При нахождении на активной странице: кнопка имеет цвет `turquoise-light`, курсор становится неактивным.

**Пропсы:**

**size - 'mobile' | 'desktop'**

- mobile - мобильное разрешение экрана
- desktop - десктопное разрешение экрана

**isActive - boolean**

- true - находимся на данной странице в данный момент, кнопка не активна
- false - кнопка активна, можно перейти на данную страницу

**Пример использования PaginationButton**

```
import PaginationButton from "../src/shared/ui/pagination-button/PaginationButton";
      <PaginationButton
        size: 'desktop',
        isActive: false
      >
        1
      </PaginationButton>
```

### `<NewsCard>`

**Для подключения компонента импортируем его по дефолту**

**Компонент принимает в качестве пропсов следующие значения:**

1.  title - заголовок принимает значение типа string
2.  subTitle - подзаголовок принимает значение типа string (пропс необязателен)
3.  description - описание принимает значение типа string (пропс необязателен)
4.  image - ссылка на картинку описание принимает значение типа string (пропс необязателен)
5.  date - дата, принимает значение типа string
6.  Наледует все дефолтные атрибуты от элемента `<a>`
7.  Принимает дополнительные стили в качестве className извне компонента

**Описание возможных значений пропсов:**

**title - "string"**
Передаем строку, обязательный пропс

**subTitle - "string"**
Передаем строку, необязательный пропс. Нет пропса - нет подзаголовка

**description - "string"**
Передаем строку, необязательный пропс. Нет пропса - нет описания

**image - "string"**
Передаем строку, необязательный пропс. Нет пропса - нет картинки

**date - "string"**
Передаем строку, обязательный пропс

**href- "string"**
Передаем строку адрес ссылки по которой переходим, обязательный пропс

**Пример использования карточки новостей c заголовком, подзаголовком, описанием и ссылкой перехода на другую страницу внешний класс красная рамка 2 px шириной**

```
import NewsCard from "../src/shared/ui/news-card/NewsCard";

       <NewsCard
          date={"26.09.23"}
          title={"Презентика"}
          subTitle={
            "Прямо сейчас презентуем изделия мастерских «Изумрудного города» на PRESENTICA 2023!"
          }
          description={
            "И вас приглашаем. Ищите нас 21–23 сентября в Гостином дворе на главной в России международной выставке подарков."
          }
          href={"https://ya.ru/"}
          className="border-2 border-red"
        />
```

### `<MenuOurProjects>`

**Для подключения компонента импортируем его по дефолту**

**Компонент принимает в качестве пропсов следующие значения:**
* 1) projectList - массив объектов с ключами title (Текст ссылки в виде строки) и link (Адрес ссылки в виде строки)

**Описание компонента:**
*Компонент создает меню с ссылками на проекты переданные через массив объектов в пропсе

**Пример использования компонента**

```
import MenuOurProjects from "../menu-our-projects/menu-our-projects";

  const projectList = [
  {
    title: "Школа сопровождаемого проживания",
    link: "/nashi-proekti/shkola-soprovozhdaemogo-prozhivaniya",
  },
  {
    title: "Трудовая реабилитация",
    link: "/nashi-proekti/trudovaya-reabilitaciya",
  },
  {
    title: "Волонтёрство для всех",
    link: "/nashi-proekti/volov=nterstvo-dlya-vseh",
  },
  {
    title: "Тренировочная квартира",
    link: "/nashi-proekti/trenirovochnaya-kvartira",
  },
  { title: "Выездные программы", link: "/nashi-proekti/viezdnye-ptogrammy" },
];

  <MenuOurProjects projectList={projectList} />
```

  
### Футер  
Для подключения компонента импортируем его по дефолту
Компонент принимает в качестве пропсов следующие значения:

 1. linkList  - массив объектов типа:
   ```javascript
    [ {   
          title: string,  
          url: string,  
          name: [  
            {  
                title: string;  
                url: string;  
            },  
             {  
                title: string;  
                url: string;  
            },  
          ...  
           {  
                title: string;  
                url: string;  
            },  
              
          ]  
         },  

       ]
      },
   ]
```

2.  className - дополнительные стили в качестве className извне компонента

#### Описание возможных занчений пропсов

    + **title** - string. Текст ссылки из футера ( ссылка-заголовок, которая будет выделена жирным шрифтом в футере)
    + **url** - string. Ссылка (часть маршрута или статический маршрут, по которому будем переходить по клику на ссылку-заголовок */адрес_ссылки-заголовка*)
    + **name** - Array. Необязательное поле. Массив объектов типа:
       + **title** - string. Текст ссылки расположенной в списке под ссылкой заголовком ( *ссылка-подзаголовок*)
       + **url** - string. Динамическая часть маршрута ( *адрес_ссылки-подзаголовка* ), по которому будем переходить по клику на *ссылку-подзаголовок*
       *адрес_ссылки-заголовка/адрес_ссылки-подзаголовка*

  - **title** - string. Текст ссылки из футера ( ссылка-заголовок, которая будет выделена жирным шрифтов в футере)
  - **url** - string. Ссылка (часть маршрута или статический маршрут, по которому будем переходить по клику на ссылку-заголовок _/адрес_ссылки-заголовка_)
  - **name** - Array. Необязательное поле. Массив объектов типа:
    - **title** - string. Текст ссылки расположенной в списке под ссылкой заголовком ( _ссылка-подзаголовок_)
    - **url** - string. Динамическая часть маршрута ( _адрес_ссылки-подзаголовка_ ), по которому будем переходить по клику на _ссылку-подзаголовок_
      _адрес*ссылки-заголовка/адрес*ссылки-подзаголовка_

Пример использования футера с пропсой **linklist** как в макете:

```
import Footer, { typeLinkArray } from "@/src/shared/ui/footer/Footer";

 let a: typeLinkArray = [
    {
      title: "Наши проекты",
      url: "/projects",
      name: [
        {
          title: "Волонтерство для всех",
          url: "volunteering",
        },
        {
          title: "Трудовая реабилитация",
          url: "rehab",
        },
        {
          title: "Выездные программы",
          url: "visiting",
        },
        {
          title: "Курьеры для своих",
          url: "couriers",
        },
        {
          title: "Школа сопровождаемого проживания",
          url: "school",
        },
        {
          title: "Товары мастерских на озоне",
          url: "products",
        }
      ]
    },
    {
      title: "Социальное обслуживание",
      url: "/social-service",
      name: [
        {
          title: "Перечень социальных услуг и тарифы",
          url: "social-list",
        },
        {
          title: "Правила внутреннего распорядка",
          url: "rules",
        },
        {
          title: "Информация о количестве мест",
          url: "seats-number",
        },
        {
          title: "Порядок предоставления социальных услуг в полустационарной форме",
          url: "procedure",
        }
      ]
    },
    {
      title: "Новости",
      url: "/news",
    },
    {
      title: "Документы",
      url: "documents",
      name: [
        {
          title: "Устав организации",
          url: "regulation",
        },
        {
          title: "Свидетельство о постановке на учёт в налоговой",
          url: "certificate-tax-service",
        },
        {
          title: "Свидетельство о регистрации НКО",
          url: "certificate-registration",
        },
        {
          title: "Благотворительная программа",
          url: "charity-programm",
        },
        {
          title: "Благотворительная программа «Помощь в период эпидемии Covid-2019»",
          url: "charity-covid",
        },
        {
          title: "Отчеты",
          url: "reports",
        },
        {
          title: "Предписания надзорных органов",
          url: "regulations",
        },
      ],
    },
    {
      title: "Контакты",
      url: "/contacts",
    },
    {
      title: "Поддержать",
      url: "support",
    },
  ];

      <Footer linkList={a} className="" />
```

### `<Tab>`

**Для подключения компонента импортируем его по дефолту**

**Компонент принимает в качестве пропсов следующие значения:**

1. text (текст внутри таба) принимает значение типа string (пропс необязателен)
2. size (Размер паддингов у таба) принимает значение "big" | "small"
3. textAlign принимает "text-left" | "text-center" (пропс необязателен, по умолчанию "text-center")
4. textStyle "font-normal" | "font-bold" | "font-normal underline"(пропс необязателен)
5. children принимает узел ReactNode (тэг React) (пропс необязателен)
6. Наследует все дефолтные атрибуты от элемента div
7. Принимает дополнительные стили в качестве className извне компонента

**Описание возможных значений пропсов:**

**text - "string"**

- необязательный параметр, если его не передаем в пропс, текста в табе не будет

**size - "big" | "small"**

- big - падинги побольше
- small - падинги поменьше

**textAlign - "text-left" | "text-center"**

- передаем как расположить текст. По умолчанию, если не передаем параметр, то "text-center"
  **textStyle - "font-normal" | "font-bold" | "font-normal underline"**
- передаем стилизацию текста. По умолчанию, если не передаем параметр, то "font-normal"
  **children-**
- передаем сюда любой тэг HTML либо тэг компонента, либо ничего не передаем, если не нужно

**Пример использования (`<Tab>` c текстом, выравнивание текста по левому краю, текст нежирный, размер полей большие, ширина таба 380px - задана в наружном классе, внутри таба тэг `<ButtonTab>`)**

```
import Tab from "../src/shared/ui/Tab/Tab";
import ButtonTab from '@/src/shared/ui/ButtonTab/ButtonTab';

    <Tab text={'Добрый день'}  size={'big'} textAlign='text-left' textStyle="font-normal" className='w-[380px]'>
      <ButtonTab clicked={true} text={'vdstert'}  size={'big'} textAlign='text-left' />
    </Tab>
```

### `<ButtonTab>`

**Для подключения компонента импортируем его по дефолту**

**Компонент принимает в качестве пропсов следующие значения:**

1. text (текст внутри таба) принимает значение типа string (пропс необязателен)
2. size (Размер паддингов у таба) принимает значение "big" | "small"
3. textAlign принимает "text-left" | "text-center" (пропс необязателен, по умолчанию "text-center")
4. clicked принимает булево значение состояния кнопки
5. Наследует все дефолтные атрибуты от элемента button
6. Принимает дополнительные стили в качестве className извне компонента

**Описание возможных значений пропсов:**

**text - "string"**

- необязательный параметр, если его не передаем в пропс, текста в табе не будет

**size - "big" | "small"**

- big - падинги побольше
- small - падинги поменьше

**textAlign - "text-left" | "text-center"**

- передаем как расположить текст. По умолчанию, если не передаем параметр, то "text-center"
  **clicked - boolean**
- true | false

**Пример использования (`<ButtonTab>` c текстом, выравнивание текста по левому краю, размер полей большие, ширина таба 380px - задана в наружном классе)**

```
import ButtonTab from '@/src/shared/ui/ButtonTab/ButtonTab';
<ButtonTab clicked={true} text={'Добрый день'}  size={'big'} textAlign='text-left' className='w-[380px]' />

```

### `<AnchorTab>`

**Для подключения компонента импортируем его по дефолту**

**Компонент принимает в качестве пропсов следующие значения:**

1. text (текст внутри таба) принимает значение типа string (пропс необязателен)
2. size (Размер паддингов у таба) принимает значение "big" | "small"
3. textAlign принимает "text-left" | "text-center" (пропс необязателен, по умолчанию "text-center")
4. textStyle "font-bold underline" | "font-bold" | "font-normal underline"(пропс необязателен)
5. children принимает узел ReactNode (тэг React) (пропс необязателен)
6. Наследует все дефолтные атрибуты от элемента ссылки
7. Принимает дополнительные стили в качестве className извне компонента

**Описание возможных значений пропсов:**

**text - "string"**

- необязательный параметр, если его не передаем в пропс, текста в табе не будет

**size - "big" | "small"**

- big - падинги побольше
- small - падинги поменьше

**textAlign - "text-left" | "text-center"**

- передаем как расположить текст. По умолчанию, если не передаем параметр, то "text-center"
  **textStyle - "font-bold underline" | "font-bold" | "font-normal underline"**
- передаем стилизацию текста. По умолчанию, если не передаем параметр, то "font-bold"
  **children-**
- передаем сюда любой тэг HTML либо тэг компонента, либо ничего не передаем, если не нужно

**Пример использования (`<AnchorTab>` c текстом жирным подчеркнутым, выравнивание текста по левому краю, размер полей большие, ширина таба 380px - задана в наружном классе)**

```
import import AnchorTab from '@/src/shared/ui/AnchorTab/AnchorTab'; from '@/src/shared/ui/AnchorTab/AnchorTab';

  <AnchorTab  text={'Добрый день'}  size={'big'} textAlign='text-left'  textStyle='font-bold underline' className='w-[380px]'>
    <span>Текст</span>
  </AnchorTab>
```

### Список партнёров

Компонент принимает массив объектов в качестве props массив `partnerList` объектов, содержащих информацию о партнёрах. Каждый объект должен иметь поля imageUrl (URL изображения партнёра) и name (название партнёра).

Компонент отображает заголовок "Партнёры" и список изображений партнёров в виде сетки. Изображения и их названия берутся из переданного массива partnerList. Каждый партнёр представлен в виде отдельного блока в сетке с соответствующим изображением.

Компонент создан с использованием стилей для оптимального отображения как на мобильных устройствах, так и на десктопах.

### Список_соцсетей

Компонент принимает массив объектов в качестве props, все значения каждого объекта валидируются на строку и все поля являются обязательными. При клике на каждую из соц сетей она будет открыта в новом окне.

Сами поля:

- imageUrl: Путь к логотипу социальной сети. Должна быть картинка размером 50 х 50.
- name: Название социальной сети. Используется в alt.
- link: Ссылка на профиль в социальной сети. Ссылка для перехода.

### Главное меню десктоп версии `<MainMenuDesktop />`

Для подключения компонента импортируем его по дефолту.

Компонент принимает пропсом массив с объектами которые содержат поля title и link, данный пропс является обязательным. При нажатии на ссылки они открываются в новом окне.

- !Необходимая ширина компонента настраивается классами.

- title: Название ссылки
- link: Адрес ссылки

- !Так как компонент использует шрифты ссылок разного размера, их мы устанавливаем через className

Пример принимаемого массива:

```
  const arr = [
    { title: "Наши проекты", link: "testurl" },
    { title: "Социальное обслуживание", link: "testurl" },
  ];
```

Пример использования компонента:

```
import MainMenuDesktop from "../src/shared/MainMenuDesktop";

<MainMenuDesktop linksList={arr} className='w-[85.84%] leading-[27px] text-[18px] font-medium' />
```

### Хедер `<Header />`

Для подключения компонента импортируем его по дефолту.

Компонент принимает пропсом булево значение isIndexPage. Если значение false - значит мы находимся на главной странице - используется большой логотип, если значение true - логотип становится маленьким.

Пример использования компонента:

```
import Header from '@/src/shared/Header';

<Header isIndexPage={true}/>
```

Пример заполнения компонента данными (ссылками меню, логотипами социальных сетей):

```
const Header: React.FC<HeaderProps> = ({ isIndexPage }) => {
  const arr = [
    { title: "Наши проекты", link: "#" },
    { title: "Социальное обслуживание", link: "#" },
    { title: "Новости", link: "#" },
    { title: "Документы", link: "#" },
    { title: "Контакты", link: "#" },
    { title: "Поддержать", link: "#" },
  ];

  const linksArr = [
    { imageUrl: "/images/logo/logoTelegram.png", name: "Telegram", link: "#" },
    { imageUrl: "/images/logo/logoVK.png", name: "VK", link: "#" },
  ];
  return (
    <div
      className={`flex ${
        isIndexPage ? "flex-row" : "flex-col"
      } px-[15px] mt-[30px] w-full justify-between xl:mt-10 md:px-[30px] 2xl:px-[130px]`}
    >
      {!isIndexPage && (
        <Link href={'/'}>
        <Image
          src={logo2}
          alt="Большой логотип сайта"
          className="m-auto mb-5 md:mb-2.5 xl:mb-10 xl:m-auto"
        />
        </Link>
      )}
      {isIndexPage && (
        <Link href='/'>
          <Image
            src={logo3}
            alt="Маленький логотип сайта"
            className="w-[264px] xl:w-[187px]"
          />
        </Link>
      )}
      <button className={`h-[23px] md:h-[26px] w-[54px] ${
          isIndexPage ? "self-center" : "self-end"
        } ${isIndexPage && "xl:flex"} ${
          !isIndexPage && "md:mr-[15px]"
        } xl:hidden hover:opacity-80`}>
      <Image
        src={menuIcon}
        alt="Иконка бургерного меню"

      />
      </button>
      <div
        className={`hidden flex justify-between ${
          isIndexPage && "xl:w-[83.86%]"
        } xl:flex`}
      >
        <MainMenuDesktop linksList={menuLinksArr} className="w-[85.84%]" />
        <SocialnetsList buttonList={socialLinks} />
      </div>
    </div>
  );
};
```

### Наши проекты `<OurProjects />`

Для подключения компонента импортируем его по дефолту.

**Пропсы:**

Пропс, projectList - это массив объектов с полями:
- заголовок (props: title): текст
- выделенный текст (props: higlight): текст
- описание (props: description): текст
- ссылка на проект (props: link): текст


**isActive - boolean**
* true - находимся на данной странице в данный момент, кнопка не активна
* false - кнопка активна, можно перейти на данную страницу

Пример использования компонента: 

```
import OurProjects from '@/src/shared/ui/our-projects/OurProjects';
interface OurProject {
    title: string,
    highlight: string,
    description: string,
    link: string
}
```

Пример заполнения компонента данными (ссылками меню, логотипами соицальных сетей):

```
const Projects = [
    { title: 'Волонтерство для всех', description: 'Помогая другим – помогаешь себе!', link: '#' },
    { title: 'Трудовая реабилитация', description: 'Помогая другим – помогаешь себе!', link: '#' },
    { title: 'Школа сопровождаемого проживания', highlight: 'Соорганизаторы: Центр лечебной педагогики «Особое детство», Союз охраны психического здоровья', description: 'Школа сопровождаемого проживания — межрегиональный проект Изумрудного города.', link: '#' },
    { title: 'Выездные программы', link: '#' },
    { title: 'Курьеры для своих', link: '#' },
    { title: 'Товары мастерских на озоне', link: '#' },
]

interface OurProjectsListProps {
    projectList: OurProject[];
}

const OurProjects: React.FC<OurProjectsListProps> = ({ projectList }) => {

    return (
        <div className='xl:py-[30px] px-[15px] xl:px-[130px]'>
            <h2 className='text-[22px] xl:text-[40px] leading-[33px] xl:leading-[60px] font-bold text-turquoise-light text-center mb-[30px] xl:mb-[60px]'>Наши проекты</h2>
            <div className='grid grid-cols-1 xl:grid-cols-[600fr_600fr_400fr] grid-rows-[154px_154px_291px_118px_118px_118px] xl:grid-rows-[289px_188px_226px] gap-[20px] xl:gap-[25px] 
            xl:[&>*:nth-child(3)]:col-span-2 xl:[&>*:nth-child(3)]:row-span-2 
            [&>*:nth-child(1)]:bg-human0 [&>*:nth-child(2)]:bg-human0
            xl:[&>*:nth-child(1)]:bg-human1 xl:[&>*:nth-child(2)]:bg-human2 xl:[&>*:nth-child(3)]:bg-human4 
            xl:[&>*:nth-child(3)]:order-3
            xl:[&>*:nth-child(4)]:order-2
            xl:[&>*:nth-child(5)]:order-4
            xl:[&>*:nth-child(6)]:order-5
            '>


                {/*поменять Projects на projectList */}


                {Projects.map((project, index) => (
                    <div key={index} className='flex flex-col justify-between rounded-[20px] bg-blue-light bg-right bg-no-repeat pt-[20px] xl:pt-[35px] pb-[18px] xl:pb-[37px]
                    pl-[20px] xl:pl-[40px]'>
                        <div className='xl:max-w-[320px] xl:[:nth-of-type(3)_&]:max-w-[617px] t-[40px]'>
                            <p className='text-[18px] xl:text-[30px] leading-[27px] xl:leading-[47px] text-turquoise-dark font-bold xl:[:nth-of-type(3)_&]:leading-[45px] 
                                xl:[:nth-of-type(5)_&]:text-[25px] xl:[:nth-of-type(5)_&]:leading-[37.5px]
                                xl:[:nth-of-type(6)_&]:text-[25px] xl:[:nth-of-type(6)_&]:leading-[37.5px]'>{project.title}</p>
                            <p className='text-[14px] xl:text-[16px] leading-[21px] xl:leading-[24px] text-turquoise-dark font-normal italic mt-[7px] xl:mt-[2px]
                            xl:[:nth-of-type(3)_&]:mt-[20px]'>{project.description}</p>
                            <p className='text-[14px] xl:text-[20px] leading-[21px] xl:leading-[30px] text-turquoise-dark font-bold mt-[3px] xl:mt-[19px]
                            xl:[:nth-of-type(5)_&]:mt-[0px]'>{project.highlight}</p>
                        </div>
                        <a href={project.link}>
                            <Button
                                variant="regular-1"
                                arrowColor="secondary"
                                withArrow={true}
                                sizeArrow="primary"
                                className="bg-white text-turquoise-light font-bold min-w-[305px] xl:min-w-[320px] text-[14px] xl:text-[20px] leading-[20px] xl:leading-[30px] justify-center 
                                xl:[:nth-of-type(4)_&]:min-w-[244px] xl:[:nth-of-type(5)_&]:min-w-[244px] xl:[:nth-of-type(6)_&]:min-w-[244px] xl:[:nth-of-type(5)_&]:mb-[3px]"
                            >Подробнее</Button></a>
                    </div>
                ))}
            </div>
            <a href='#' className='xl:flex xl:flex-row xl:justify-end xl:mt-[27px]'>
                <Button
                    variant="regular-2"
                    arrowColor="secondary"
                    withArrow={true}
                    sizeArrow="primary"
                    className="w-[100%] xl:max-w-[393px] bg-white text-turquoise-light mt-[30px] text-[14px] xl:text-[20px] leading-[17px] xl:leading-[30px] font-bold justify-center"
                >Посмотреть все проекты</Button>
            </a>
        </div>
    );
};
```

 ### Свайпер 
Для подключения компонента импортируем его по дефолту
Компонент принимает в качестве пропсов следующие значения:

 1.  **pictureArray**  - массив объектов типа:
   ```javascript
    [ {   
          url: string,
          name: string,
          description: string,
          advancedDescription: string,
          altPic: string,
          date: string,   
         },  

        {   
          url: string,
          name: string,
          advancedDescription: string,
          altPic: string,
          date: string,   
         },  
        ...  
       {   
          url: string,
          name: string,
          description: string,
          altPic: string,
         
         },  
            
          
         
      ]
``` 
  Где,
 +  **url** : путь, по которому расположена картинка слайда,
+ **name**   : заголовок слайда (под картинкой),
+ **description** : описание слайда под заголовком,
+ **advancedDescription** :  необязательное поле, дополнительное описание под основным заголовком (только для страницы новостей ),
+ **altPic** : описание картинки,
+ **date** : необязательное поле, дата (только для страницы новостей),   

   
  2. **breakpoints** - массив брейкпойнтов типа: 
    
    ``` 
    javascript
    [ {   
          width: number,
          quantity: number,
          naturalSlideWidth: number,
          naturalSlideHeight: number,
          dragEnabled: boolean,
         },  

       
        ...  
      {   
          width: number,
          quantity: number,
          naturalSlideWidth: number,
          naturalSlideHeight: number,
         
         },  

            
          
         
      ]
   
     ```
     Должен  иметь столько членов, сколько хотим брейкпоинтов, **брейкпоинты должны распологаться по возрастанию поля width** !!!!
     Где, 
  + **width** : размер экрана брейкпоинта (если наш экран меньше этого значения принимается брейкпоинт предыдущего члена массива),
  + **quantity** : количество слайдов, которые покажем одновременно,
  + **naturalSlideWidth** : ширина слайда,
  + **naturalSlideHeight** : высота сдайда,
  + **dragEnabled** :  необязательное поле, по умолчанию false, разрешает либо запрещает перетягивать слайды вперед и назад мышкой,
  3.  **infinite** boolean. Определяет, будет ли карусель бесконечной. Если она бесконечная (true), то когда доходим до последнего слайда и нажимаем "вперед",
   показываются группа слайдов с первого по, например третий (если количество слайдов, показываемое одновременно равно 3),
   аналогично для слайдов с первого по третий (если количество слайдов, показываемое одновременно равно 3), если нажимаем "назад", появляется группа слайдов с предпредпоследнего по последний. Если infinite равно false  кнопки "вперед" и н"назад" блокируются в крайних положениях

   4. **zoomSelected** boolean. Определяет, будет ли увеличиваться активный слайд. Данная опция, если true работает на десктопных разрешениях (когда на свайпере присутствуют кнопки "вперед" "назад"). Если поставить false - зум активного слайда не работает.
   5.  **page** = 'news' | 'home' для какой страницы используем, то и выбираем. Определяет CSS стили свайпера в зависимости от страницы.
   
 
   ####  Описание возможных значений пропсов
   + **pictureArray** -  Array. Массив объектов. Возможные значения полей членов массива импортируем из файла swiper-config.ts
    import { picArray, breakpoints } from '@/src/app/configs/swiper-config'; (для свайпера на главной странице),
    либо  import {  newsBreakpoints, picArrayNews } from '@/src/app/configs/swiper-config'; (для свайпера на  странице новостей)
     - pictureArray={picArray} для главной
     - pictureArray={picArrayNews} для страницы новостей
  + **breakpoints** -  Array. Массив объектов. Возможные значения полей членов массива импортируем из файла swiper-config.ts
    import { picArray, breakpoints } from '@/src/app/configs/swiper-config'; (для свайпера на главной странице),
    либо  import {  newsBreakpoints, picArrayNews } from '@/src/app/configs/swiper-config'; (для свайпера на  странице новостей)
    - breakpoints={breakpoints} для главной
    - breakpoints={newsBreakpoints} для страницы новостей
  + **значения остальных пропсов описаны выше** 

Пример использования swiper с пропсой **pictureArray** **breakpoints** как для страницы новостей:


```
import Swiper from '../src/shared/ui/swiper/swiper';
import { newsBreakpoints, picArrayNews } from '@/src/app/configs/swiper-config';
  
 <Swiper  pictureArray={picArrayNews} breakpoints={newsBreakpoints} infinite={true} zoomSelected={false} page={'news'}/>

     
  ```

  Пример использования swiper с пропсой **pictureArray** **breakpoints** как для главной :
  ```
import Swiper from '../src/shared/ui/swiper/swiper';
import { picArray, breakpoints} from '@/src/app/configs/swiper-config';
  
 <Swiper  pictureArray={picArray} breakpoints={breakpoints} infinite={true} zoomSelected={true} page={'home'}/>

     
  ```

