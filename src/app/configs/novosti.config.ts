export interface News {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  text: string;
  date: string;
  fullnews: FullNews;
}

interface FullNews {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  greenText: string;
}

const newsData: News[] = [
  {
    id: "1",
    image: "/images/novosti/news-lekcii.png",
    title: "Лекции в Свято-Филаретовском институте",
    subtitle: "Продолжаем читать лекции в Свято-Филаретовском институте!",
    text: "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
    date: "26.09.23",
    fullnews: {
      text1:
        "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
      text2:
        "Мы рады возможности делиться знаниями и опытом в области социальной работы, а делать это в стенах любимого Свято-Филаретовского института особенно ценно. Образовательные программы СФИ предназначены для взрослых людей, как правило, уже имеющих высшее образование, профессиональный и жизненный багаж, и нацелены не только на качественную подготовку по новой специальности, но и на реализацию потребности каждого человека в творческом росте, общении и самоотдаче.",
      text3:
        "Этот подход к обучению нам очень близок. Искренняя заинтересованность студентов и горящие глаза в аудиториях — лучшая мотивация снова и снова приходить на лекции, чтобы передать новому поколению социальных координаторов всё, что удалось накопить за годы практики.",
      text4:
        "Для нас это своеобразный личный вклад в будущее, ведь социальные координаторы будут играть в обществе важную роль. Им предстоит выявлять реальные потребности человека и составлять план действий, налаживая комплексную «умную» помощь: организовывать оказание услуг, привлекать специалистов, координировать их взаимодействие, помогать с оформлением документов и получением социальных гарантий, взаимодействовать с членами семьи и окружением, защищать интересы клиента. И поддерживать высокий уровень жизни человека, помогая сохранять его самостоятельность и человеческое достоинство.",
      text5:
        "Благодарим Свято-Филаретовский институт за плодотворное сотрудничество и возможность быть причастными к обучению замечательных специалистов!",
      greenText:
        "Кстати, до 29 сентября можно поступить в СФИ на полуторагодовую программу «Социальная работа в системе долговременного ухода». Подробности ищите по ссылке в комментариях.",
    },
  },
  {
    id: "2",
    image: "/images/novosti/news-prezentika.png",
    title: "Презентика",
    subtitle:
      "Прямо сейчас презентуем изделия мастерских «Изумрудного города» на PRESENTICA 2023!",
    text: "И вас приглашаем. Ищите нас 21–23 сентября в Гостином дворе на главной в России международной выставке подарков.",
    date: "21.09.23",
    fullnews: {
      text1:
        "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
      text2:
        "Мы рады возможности делиться знаниями и опытом в области социальной работы, а делать это в стенах любимого Свято-Филаретовского института особенно ценно. Образовательные программы СФИ предназначены для взрослых людей, как правило, уже имеющих высшее образование, профессиональный и жизненный багаж, и нацелены не только на качественную подготовку по новой специальности, но и на реализацию потребности каждого человека в творческом росте, общении и самоотдаче.",
      text3:
        "Этот подход к обучению нам очень близок. Искренняя заинтересованность студентов и горящие глаза в аудиториях — лучшая мотивация снова и снова приходить на лекции, чтобы передать новому поколению социальных координаторов всё, что удалось накопить за годы практики.",
      text4:
        "Для нас это своеобразный личный вклад в будущее, ведь социальные координаторы будут играть в обществе важную роль. Им предстоит выявлять реальные потребности человека и составлять план действий, налаживая комплексную «умную» помощь: организовывать оказание услуг, привлекать специалистов, координировать их взаимодействие, помогать с оформлением документов и получением социальных гарантий, взаимодействовать с членами семьи и окружением, защищать интересы клиента. И поддерживать высокий уровень жизни человека, помогая сохранять его самостоятельность и человеческое достоинство.",
      text5:
        "Благодарим Свято-Филаретовский институт за плодотворное сотрудничество и возможность быть причастными к обучению замечательных специалистов!",
      greenText:
        "Кстати, до 29 сентября можно поступить в СФИ на полуторагодовую программу «Социальная работа в системе долговременного ухода». Подробности ищите по ссылке в комментариях.",
    },
  },
  {
    id: "3",
    image: "/images/novosti/news-proIgorya.png",
    title: "Про Игоря",
    text: "Помните нашего Игоря — героя интервью, взятого в августе Ольгой Савельевой? Читатели наших соцсетей спрашивают, как там у него дела, есть ли новости, хорошие ли они.",
    date: "19.09.23",
    fullnews: {
      text1:
        "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
      text2:
        "Мы рады возможности делиться знаниями и опытом в области социальной работы, а делать это в стенах любимого Свято-Филаретовского института особенно ценно. Образовательные программы СФИ предназначены для взрослых людей, как правило, уже имеющих высшее образование, профессиональный и жизненный багаж, и нацелены не только на качественную подготовку по новой специальности, но и на реализацию потребности каждого человека в творческом росте, общении и самоотдаче.",
      text3:
        "Этот подход к обучению нам очень близок. Искренняя заинтересованность студентов и горящие глаза в аудиториях — лучшая мотивация снова и снова приходить на лекции, чтобы передать новому поколению социальных координаторов всё, что удалось накопить за годы практики.",
      text4:
        "Для нас это своеобразный личный вклад в будущее, ведь социальные координаторы будут играть в обществе важную роль. Им предстоит выявлять реальные потребности человека и составлять план действий, налаживая комплексную «умную» помощь: организовывать оказание услуг, привлекать специалистов, координировать их взаимодействие, помогать с оформлением документов и получением социальных гарантий, взаимодействовать с членами семьи и окружением, защищать интересы клиента. И поддерживать высокий уровень жизни человека, помогая сохранять его самостоятельность и человеческое достоинство.",
      text5:
        "Благодарим Свято-Филаретовский институт за плодотворное сотрудничество и возможность быть причастными к обучению замечательных специалистов!",
      greenText:
        "Кстати, до 29 сентября можно поступить в СФИ на полуторагодовую программу «Социальная работа в системе долговременного ухода». Подробности ищите по ссылке в комментариях.",
    },
  },
  {
    id: "4",
    image: "/images/novosti/news-lekcii.png",
    title: "Лекции в Свято-Филаретовском институте",
    subtitle: "Продолжаем читать лекции в Свято-Филаретовском институте!",
    text: "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
    date: "26.09.23",
    fullnews: {
      text1:
        "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
      text2:
        "Мы рады возможности делиться знаниями и опытом в области социальной работы, а делать это в стенах любимого Свято-Филаретовского института особенно ценно. Образовательные программы СФИ предназначены для взрослых людей, как правило, уже имеющих высшее образование, профессиональный и жизненный багаж, и нацелены не только на качественную подготовку по новой специальности, но и на реализацию потребности каждого человека в творческом росте, общении и самоотдаче.",
      text3:
        "Этот подход к обучению нам очень близок. Искренняя заинтересованность студентов и горящие глаза в аудиториях — лучшая мотивация снова и снова приходить на лекции, чтобы передать новому поколению социальных координаторов всё, что удалось накопить за годы практики.",
      text4:
        "Для нас это своеобразный личный вклад в будущее, ведь социальные координаторы будут играть в обществе важную роль. Им предстоит выявлять реальные потребности человека и составлять план действий, налаживая комплексную «умную» помощь: организовывать оказание услуг, привлекать специалистов, координировать их взаимодействие, помогать с оформлением документов и получением социальных гарантий, взаимодействовать с членами семьи и окружением, защищать интересы клиента. И поддерживать высокий уровень жизни человека, помогая сохранять его самостоятельность и человеческое достоинство.",
      text5:
        "Благодарим Свято-Филаретовский институт за плодотворное сотрудничество и возможность быть причастными к обучению замечательных специалистов!",
      greenText:
        "Кстати, до 29 сентября можно поступить в СФИ на полуторагодовую программу «Социальная работа в системе долговременного ухода». Подробности ищите по ссылке в комментариях.",
    },
  },
  {
    id: "5",
    image: "/images/novosti/news-prezentika.png",
    title: "Презентика",
    subtitle:
      "Прямо сейчас презентуем изделия мастерских «Изумрудного города» на PRESENTICA 2023!",
    text: "И вас приглашаем. Ищите нас 21–23 сентября в Гостином дворе на главной в России международной выставке подарков.",
    date: "21.09.23",
    fullnews: {
      text1:
        "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
      text2:
        "Мы рады возможности делиться знаниями и опытом в области социальной работы, а делать это в стенах любимого Свято-Филаретовского института особенно ценно. Образовательные программы СФИ предназначены для взрослых людей, как правило, уже имеющих высшее образование, профессиональный и жизненный багаж, и нацелены не только на качественную подготовку по новой специальности, но и на реализацию потребности каждого человека в творческом росте, общении и самоотдаче.",
      text3:
        "Этот подход к обучению нам очень близок. Искренняя заинтересованность студентов и горящие глаза в аудиториях — лучшая мотивация снова и снова приходить на лекции, чтобы передать новому поколению социальных координаторов всё, что удалось накопить за годы практики.",
      text4:
        "Для нас это своеобразный личный вклад в будущее, ведь социальные координаторы будут играть в обществе важную роль. Им предстоит выявлять реальные потребности человека и составлять план действий, налаживая комплексную «умную» помощь: организовывать оказание услуг, привлекать специалистов, координировать их взаимодействие, помогать с оформлением документов и получением социальных гарантий, взаимодействовать с членами семьи и окружением, защищать интересы клиента. И поддерживать высокий уровень жизни человека, помогая сохранять его самостоятельность и человеческое достоинство.",
      text5:
        "Благодарим Свято-Филаретовский институт за плодотворное сотрудничество и возможность быть причастными к обучению замечательных специалистов!",
      greenText:
        "Кстати, до 29 сентября можно поступить в СФИ на полуторагодовую программу «Социальная работа в системе долговременного ухода». Подробности ищите по ссылке в комментариях.",
    },
  },
  {
    id: "6",
    image: "/images/novosti/news-proIgorya.png",
    title: "Про Игоря",
    text: "Помните нашего Игоря — героя интервью, взятого в августе Ольгой Савельевой? Читатели наших соцсетей спрашивают, как там у него дела, есть ли новости, хорошие ли они.",
    date: "19.09.23",
    fullnews: {
      text1:
        "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
      text2:
        "Мы рады возможности делиться знаниями и опытом в области социальной работы, а делать это в стенах любимого Свято-Филаретовского института особенно ценно. Образовательные программы СФИ предназначены для взрослых людей, как правило, уже имеющих высшее образование, профессиональный и жизненный багаж, и нацелены не только на качественную подготовку по новой специальности, но и на реализацию потребности каждого человека в творческом росте, общении и самоотдаче.",
      text3:
        "Этот подход к обучению нам очень близок. Искренняя заинтересованность студентов и горящие глаза в аудиториях — лучшая мотивация снова и снова приходить на лекции, чтобы передать новому поколению социальных координаторов всё, что удалось накопить за годы практики.",
      text4:
        "Для нас это своеобразный личный вклад в будущее, ведь социальные координаторы будут играть в обществе важную роль. Им предстоит выявлять реальные потребности человека и составлять план действий, налаживая комплексную «умную» помощь: организовывать оказание услуг, привлекать специалистов, координировать их взаимодействие, помогать с оформлением документов и получением социальных гарантий, взаимодействовать с членами семьи и окружением, защищать интересы клиента. И поддерживать высокий уровень жизни человека, помогая сохранять его самостоятельность и человеческое достоинство.",
      text5:
        "Благодарим Свято-Филаретовский институт за плодотворное сотрудничество и возможность быть причастными к обучению замечательных специалистов!",
      greenText:
        "Кстати, до 29 сентября можно поступить в СФИ на полуторагодовую программу «Социальная работа в системе долговременного ухода». Подробности ищите по ссылке в комментариях.",
    },
  },
  {
    id: "7",
    image: "/images/novosti/news-lekcii.png",
    title: "Лекции в Свято-Филаретовском институте",
    subtitle: "Продолжаем читать лекции в Свято-Филаретовском институте!",
    text: "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
    date: "26.09.23",
    fullnews: {
      text1:
        "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
      text2:
        "Мы рады возможности делиться знаниями и опытом в области социальной работы, а делать это в стенах любимого Свято-Филаретовского института особенно ценно. Образовательные программы СФИ предназначены для взрослых людей, как правило, уже имеющих высшее образование, профессиональный и жизненный багаж, и нацелены не только на качественную подготовку по новой специальности, но и на реализацию потребности каждого человека в творческом росте, общении и самоотдаче.",
      text3:
        "Этот подход к обучению нам очень близок. Искренняя заинтересованность студентов и горящие глаза в аудиториях — лучшая мотивация снова и снова приходить на лекции, чтобы передать новому поколению социальных координаторов всё, что удалось накопить за годы практики.",
      text4:
        "Для нас это своеобразный личный вклад в будущее, ведь социальные координаторы будут играть в обществе важную роль. Им предстоит выявлять реальные потребности человека и составлять план действий, налаживая комплексную «умную» помощь: организовывать оказание услуг, привлекать специалистов, координировать их взаимодействие, помогать с оформлением документов и получением социальных гарантий, взаимодействовать с членами семьи и окружением, защищать интересы клиента. И поддерживать высокий уровень жизни человека, помогая сохранять его самостоятельность и человеческое достоинство.",
      text5:
        "Благодарим Свято-Филаретовский институт за плодотворное сотрудничество и возможность быть причастными к обучению замечательных специалистов!",
      greenText:
        "Кстати, до 29 сентября можно поступить в СФИ на полуторагодовую программу «Социальная работа в системе долговременного ухода». Подробности ищите по ссылке в комментариях.",
    },
  },
  {
    id: "8",
    image: "/images/novosti/news-lekcii.png",
    title: "Лекции в Свято-Филаретовском институте",
    subtitle: "Продолжаем читать лекции в Свято-Филаретовском институте!",
    text: "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
    date: "26.09.23",
    fullnews: {
      text1:
        "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
      text2:
        "Мы рады возможности делиться знаниями и опытом в области социальной работы, а делать это в стенах любимого Свято-Филаретовского института особенно ценно. Образовательные программы СФИ предназначены для взрослых людей, как правило, уже имеющих высшее образование, профессиональный и жизненный багаж, и нацелены не только на качественную подготовку по новой специальности, но и на реализацию потребности каждого человека в творческом росте, общении и самоотдаче.",
      text3:
        "Этот подход к обучению нам очень близок. Искренняя заинтересованность студентов и горящие глаза в аудиториях — лучшая мотивация снова и снова приходить на лекции, чтобы передать новому поколению социальных координаторов всё, что удалось накопить за годы практики.",
      text4:
        "Для нас это своеобразный личный вклад в будущее, ведь социальные координаторы будут играть в обществе важную роль. Им предстоит выявлять реальные потребности человека и составлять план действий, налаживая комплексную «умную» помощь: организовывать оказание услуг, привлекать специалистов, координировать их взаимодействие, помогать с оформлением документов и получением социальных гарантий, взаимодействовать с членами семьи и окружением, защищать интересы клиента. И поддерживать высокий уровень жизни человека, помогая сохранять его самостоятельность и человеческое достоинство.",
      text5:
        "Благодарим Свято-Филаретовский институт за плодотворное сотрудничество и возможность быть причастными к обучению замечательных специалистов!",
      greenText:
        "Кстати, до 29 сентября можно поступить в СФИ на полуторагодовую программу «Социальная работа в системе долговременного ухода». Подробности ищите по ссылке в комментариях.",
    },
  },
  {
    id: "9",
    image: "/images/novosti/news-lekcii.png",
    title: "Лекции в Свято-Филаретовском институте",
    subtitle: "Продолжаем читать лекции в Свято-Филаретовском институте!",
    text: "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
    date: "26.09.23",
    fullnews: {
      text1:
        "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
      text2:
        "Мы рады возможности делиться знаниями и опытом в области социальной работы, а делать это в стенах любимого Свято-Филаретовского института особенно ценно. Образовательные программы СФИ предназначены для взрослых людей, как правило, уже имеющих высшее образование, профессиональный и жизненный багаж, и нацелены не только на качественную подготовку по новой специальности, но и на реализацию потребности каждого человека в творческом росте, общении и самоотдаче.",
      text3:
        "Этот подход к обучению нам очень близок. Искренняя заинтересованность студентов и горящие глаза в аудиториях — лучшая мотивация снова и снова приходить на лекции, чтобы передать новому поколению социальных координаторов всё, что удалось накопить за годы практики.",
      text4:
        "Для нас это своеобразный личный вклад в будущее, ведь социальные координаторы будут играть в обществе важную роль. Им предстоит выявлять реальные потребности человека и составлять план действий, налаживая комплексную «умную» помощь: организовывать оказание услуг, привлекать специалистов, координировать их взаимодействие, помогать с оформлением документов и получением социальных гарантий, взаимодействовать с членами семьи и окружением, защищать интересы клиента. И поддерживать высокий уровень жизни человека, помогая сохранять его самостоятельность и человеческое достоинство.",
      text5:
        "Благодарим Свято-Филаретовский институт за плодотворное сотрудничество и возможность быть причастными к обучению замечательных специалистов!",
      greenText:
        "Кстати, до 29 сентября можно поступить в СФИ на полуторагодовую программу «Социальная работа в системе долговременного ухода». Подробности ищите по ссылке в комментариях.",
    },
  },
  {
    id: "10",
    image: "/images/novosti/news-lekcii.png",
    title: "Лекции в Свято-Филаретовском институте",
    subtitle: "Продолжаем читать лекции в Свято-Филаретовском институте!",
    text: "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
    date: "26.09.23",
    fullnews: {
      text1:
        "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
      text2:
        "Мы рады возможности делиться знаниями и опытом в области социальной работы, а делать это в стенах любимого Свято-Филаретовского института особенно ценно. Образовательные программы СФИ предназначены для взрослых людей, как правило, уже имеющих высшее образование, профессиональный и жизненный багаж, и нацелены не только на качественную подготовку по новой специальности, но и на реализацию потребности каждого человека в творческом росте, общении и самоотдаче.",
      text3:
        "Этот подход к обучению нам очень близок. Искренняя заинтересованность студентов и горящие глаза в аудиториях — лучшая мотивация снова и снова приходить на лекции, чтобы передать новому поколению социальных координаторов всё, что удалось накопить за годы практики.",
      text4:
        "Для нас это своеобразный личный вклад в будущее, ведь социальные координаторы будут играть в обществе важную роль. Им предстоит выявлять реальные потребности человека и составлять план действий, налаживая комплексную «умную» помощь: организовывать оказание услуг, привлекать специалистов, координировать их взаимодействие, помогать с оформлением документов и получением социальных гарантий, взаимодействовать с членами семьи и окружением, защищать интересы клиента. И поддерживать высокий уровень жизни человека, помогая сохранять его самостоятельность и человеческое достоинство.",
      text5:
        "Благодарим Свято-Филаретовский институт за плодотворное сотрудничество и возможность быть причастными к обучению замечательных специалистов!",
      greenText:
        "Кстати, до 29 сентября можно поступить в СФИ на полуторагодовую программу «Социальная работа в системе долговременного ухода». Подробности ищите по ссылке в комментариях.",
    },
  },
  {
    id: "11",
    image: "/images/novosti/news-lekcii.png",
    title: "Лекции в Свято-Филаретовском институте",
    subtitle: "Продолжаем читать лекции в Свято-Филаретовском институте!",
    text: "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
    date: "26.09.23",
    fullnews: {
      text1:
        "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
      text2:
        "Мы рады возможности делиться знаниями и опытом в области социальной работы, а делать это в стенах любимого Свято-Филаретовского института особенно ценно. Образовательные программы СФИ предназначены для взрослых людей, как правило, уже имеющих высшее образование, профессиональный и жизненный багаж, и нацелены не только на качественную подготовку по новой специальности, но и на реализацию потребности каждого человека в творческом росте, общении и самоотдаче.",
      text3:
        "Этот подход к обучению нам очень близок. Искренняя заинтересованность студентов и горящие глаза в аудиториях — лучшая мотивация снова и снова приходить на лекции, чтобы передать новому поколению социальных координаторов всё, что удалось накопить за годы практики.",
      text4:
        "Для нас это своеобразный личный вклад в будущее, ведь социальные координаторы будут играть в обществе важную роль. Им предстоит выявлять реальные потребности человека и составлять план действий, налаживая комплексную «умную» помощь: организовывать оказание услуг, привлекать специалистов, координировать их взаимодействие, помогать с оформлением документов и получением социальных гарантий, взаимодействовать с членами семьи и окружением, защищать интересы клиента. И поддерживать высокий уровень жизни человека, помогая сохранять его самостоятельность и человеческое достоинство.",
      text5:
        "Благодарим Свято-Филаретовский институт за плодотворное сотрудничество и возможность быть причастными к обучению замечательных специалистов!",
      greenText:
        "Кстати, до 29 сентября можно поступить в СФИ на полуторагодовую программу «Социальная работа в системе долговременного ухода». Подробности ищите по ссылке в комментариях.",
    },
  },
  {
    id: "12",
    image: "/images/novosti/news-lekcii.png",
    title: "Лекции в Свято-Филаретовском институте",
    subtitle: "Продолжаем читать лекции в Свято-Филаретовском институте!",
    text: "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
    date: "26.09.23",
    fullnews: {
      text1:
        "В рамках программы подготовки социальных координаторов директор «Изумрудного города», психолог Никита Сусов делится со студентами практическим опытом работы, а наш директор по развитию, врач-психиатр и к.м.н. Надежда Степунина ведёт лекционный курс по общей и клинической психиатрии.",
      text2:
        "Мы рады возможности делиться знаниями и опытом в области социальной работы, а делать это в стенах любимого Свято-Филаретовского института особенно ценно. Образовательные программы СФИ предназначены для взрослых людей, как правило, уже имеющих высшее образование, профессиональный и жизненный багаж, и нацелены не только на качественную подготовку по новой специальности, но и на реализацию потребности каждого человека в творческом росте, общении и самоотдаче.",
      text3:
        "Этот подход к обучению нам очень близок. Искренняя заинтересованность студентов и горящие глаза в аудиториях — лучшая мотивация снова и снова приходить на лекции, чтобы передать новому поколению социальных координаторов всё, что удалось накопить за годы практики.",
      text4:
        "Для нас это своеобразный личный вклад в будущее, ведь социальные координаторы будут играть в обществе важную роль. Им предстоит выявлять реальные потребности человека и составлять план действий, налаживая комплексную «умную» помощь: организовывать оказание услуг, привлекать специалистов, координировать их взаимодействие, помогать с оформлением документов и получением социальных гарантий, взаимодействовать с членами семьи и окружением, защищать интересы клиента. И поддерживать высокий уровень жизни человека, помогая сохранять его самостоятельность и человеческое достоинство.",
      text5:
        "Благодарим Свято-Филаретовский институт за плодотворное сотрудничество и возможность быть причастными к обучению замечательных специалистов!",
      greenText:
        "Кстати, до 29 сентября можно поступить в СФИ на полуторагодовую программу «Социальная работа в системе долговременного ухода». Подробности ищите по ссылке в комментариях.",
    },
  },
];

export default newsData;
