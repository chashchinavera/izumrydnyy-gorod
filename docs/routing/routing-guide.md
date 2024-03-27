# Документация по роутингу

## Введение

Этот документ предоставляет общее и на данный момент не окончательное описание структуры и логики маршрутизации в проекте на базе Next.js с использованием app-routing. Здесь вы найдете информацию о страницах проекта, и компонентов состовляющих эти страницы.


## Общая_структура_проекта

[- Главная страница (/)](#Главная_страница) 
[- Наши проекты (/projects)](#Наши_проекты) 
  Статические маршруты для проектов: 
  [- Школа сопровождаемого проживания (/projects/school)](#Школа_сопровождаемого_проживания) 
  [- Трудовая реабилитация (/projects/rehab)](#Трудовая_реабилитация) 
  [- Волонтёрство для всех (/projects/volunteering))](#Волонтёрство_для_всех) 
  [- Тренировочная квартира (/projects/flat))](#Тренировочная_квартира) 
  [- Выездные программы (/projects/visiting))](#Выездные_программы) 
    Статические маршруты для проектов: 
    [- 2009 год (/projects/visiting/2009))](#Выездные_программы_2009) 
    [- 2015 год (/projects/visiting/2015))](#Выездные_программы_2015) 
    [- 2016 год, лето (/projects/visiting/2016-summer))](#Выездные_программы_2009_Лето) 
    [- 2016 год, декабрь (/projects/visiting/2016-december))](#Выездные_программы_2016_Декабрь) 
[- Социальное обслуживание (/social-service))](#Социальное_обслуживание) 
[- Новости (/news))](#Новости) 
  [- Динамический маршрут для отдельной новости (/news/[id]))](#Одна_Новость) 
[- Документы (/documents))](#Документы) 
[- Контакты (/contacts))](#Контакты) 
- Поддержать (/support-us) 
На данный момент исходя из макета непонятно какая логика должна быть при клике на кнопку или на страницу в навигации сайта, в макете отсуствует компонент/страница
[- NotFound (/404))](#404)
Очень важная страница для User Experience, но в макете, к сожалению, тоже отсутствует, можно сверстать/стилизовать на свое чувство прекрасного

## Компонент_контейнер_Layout

Список компонентов:

- Header || - ContextMenu (При viewport <= 320px)
- loader (Reused) || {children}
- Footer


## Главная_страница

Список компонентов:

[Layout](#Компонент_контейнер_Layout) (Reused)
- SupportUsSmall
- AboutUs
- OurProjects
- Team
- SupportUsBig
- Partners


## Наши_проекты

Наши проекты - Родительская страница, которая служит точкой входа для отображения дочерних маршрутов, таких как "/projects/school" При переходе клиента на /projects должен быть редирект на (/projects/school), пустой страницы на роуте /projects быть не должно


## Школа_сопровождаемого_проживания

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- ProjectsNav (Reused)
- School


## Трудовая_реабилитация

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- ProjectsNav (Reused)
- SocialTreners
- SmallTypography
- Couriers
- HouseOfHerbs


## Волонтёрство_для_всех

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- ProjectsNav (Reused)
- VolunteeringForEveryone
- FillForm


## Тренировочная_квартира

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- ProjectsNav (Reused)
- TrainingFlat
- YouTubePlayer


## Выездные_программы

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- ProjectsNav (Reused)
- VisitingProgramsLists


## Выездные_программы_2009

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- ProjectsNav (Reused)
- Story (Reused/customized)
- PhotoBlock (Reused/customized)


## Выездные_программы_2015

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- ProjectsNav (Reused)
- Story (Reused/customized)
- PhotoBlock (Reused/customized)


## Выездные_программы_2009_Лето

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- ProjectsNav (Reused)
- Story (Reused/customized)
- PhotoBlock (Reused/customized)


## Выездные_программы_2016_Декабрь

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- ProjectsNav (Reused)
- Story (Reused/customized)
- PhotoBlock (Reused/customized)


## Социальное_обслуживание

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- SocialLists
- PhotoBlock (Reused/customized)


## Новости

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- NewsLists (Reused/customized)
- NewsPagination (Reused/customized)


## Одна_новость

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- NewsList
- NewsLists (Reused/customized)
- NewsPagination (Reused/customized)


## Документы

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- DocsLists


## Контакты

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- Contacts


## 404

Список компонентов

[Layout](#Компонент_контейнер_Layout) (Reused)
- NotFound