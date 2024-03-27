import React from 'react';
import NotFoundComponent from '@/src/shared/ui/NotFoundComponent';

export default function NotFound() {
  const exampleProps = {
    title: 'Страница не найдена',
    description: 'Этой страницы не существует. Ее нет. А люди с психическими расстройствами есть',
    linkMain: {
      url: '/',
      title: 'Перейти на главную',
    },
    linkHelp: {
      url: '/help',
      title: 'Помочь',
    },
  };

  return <NotFoundComponent {...exampleProps} />;
}
