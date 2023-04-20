import { Disclosure } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared';
import { classNames } from 'shared/config/theme/lib/classNames';
import cls from './MainPage.module.scss';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      {t<string>('mainPage.title')}
      <div className={cls.disclosureBox}>
        <Disclosure>
          {({ open }) => {
            const isEven = true;
            return (
              <div className={cls.contentWrapper}>
                <Disclosure.Button
                  className={classNames(cls.closureHeaderButton, {
                    [cls.borderHide]: open,
                    [cls.borderTopHide]: isEven,
                  })}
                >
                  Lesson 2 - Basic parameters
                  <p className={classNames(cls.icon, { [cls.iconHide]: open })}>+</p>
                  <p className={classNames(cls.icon, { [cls.iconHide]: !open })}>-</p>
                </Disclosure.Button>
                <div className={classNames(cls.transition, { [cls.open]: open })}>
                  <Disclosure.Panel className={cls.panel}>
                    <ul className={cls.list}>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                    </ul>
                  </Disclosure.Panel>
                </div>
              </div>
            );
          }}
        </Disclosure>
        <Disclosure>
          {({ open }) => {
            const isEven = true;
            return (
              <div className={cls.contentWrapper}>
                <Disclosure.Button
                  className={classNames(cls.closureHeaderButton, {
                    [cls.borderHide]: open,
                    [cls.borderTopHide]: isEven,
                  })}
                >
                  Lesson 2 - Basic parameters
                  <p className={classNames(cls.icon, { [cls.iconHide]: open })}>+</p>
                  <p className={classNames(cls.icon, { [cls.iconHide]: !open })}>-</p>
                </Disclosure.Button>
                <div className={classNames(cls.transition, { [cls.open]: open })}>
                  <Disclosure.Panel static className={cls.panel}>
                    <ul className={cls.list}>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                    </ul>
                  </Disclosure.Panel>
                </div>
              </div>
            );
          }}
        </Disclosure>
        <Disclosure>
          {({ open }) => {
            const isEven = true;
            return (
              <div className={cls.contentWrapper}>
                <Disclosure.Button
                  className={classNames(cls.closureHeaderButton, {
                    [cls.borderHide]: open,
                    [cls.borderTopHide]: isEven,
                  })}
                >
                  Lesson 2 - Basic parameters
                  <p className={classNames(cls.icon, { [cls.iconHide]: open })}>+</p>
                  <p className={classNames(cls.icon, { [cls.iconHide]: !open })}>-</p>
                </Disclosure.Button>
                <div className={classNames(cls.transition, { [cls.open]: open })}>
                  <Disclosure.Panel className={cls.panel}>
                    <ul className={cls.list}>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                    </ul>
                  </Disclosure.Panel>
                </div>
              </div>
            );
          }}
        </Disclosure>
        <Disclosure>
          {({ open }) => {
            const isEven = true;
            return (
              <div className={cls.contentWrapper}>
                <Disclosure.Button
                  className={classNames(cls.closureHeaderButton, {
                    [cls.borderHide]: open,
                    [cls.borderTopHide]: isEven,
                  })}
                >
                  Lesson 2 - Basic parameters
                  <p className={classNames(cls.icon, { [cls.iconHide]: open })}>+</p>
                  <p className={classNames(cls.icon, { [cls.iconHide]: !open })}>-</p>
                </Disclosure.Button>
                <div className={classNames(cls.transition, { [cls.open]: open })}>
                  <Disclosure.Panel className={cls.panel}>
                    <ul className={cls.list}>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                    </ul>
                  </Disclosure.Panel>
                </div>
              </div>
            );
          }}
        </Disclosure>
        <Disclosure>
          {({ open }) => {
            const isEven = true;
            return (
              <div className={cls.contentWrapper}>
                <Disclosure.Button
                  className={classNames(cls.closureHeaderButton, {
                    [cls.borderHide]: open,
                    [cls.borderTopHide]: isEven,
                  })}
                >
                  Lesson 2 - Basic parameters
                  <p className={classNames(cls.icon, { [cls.iconHide]: open })}>+</p>
                  <p className={classNames(cls.icon, { [cls.iconHide]: !open })}>-</p>
                </Disclosure.Button>
                <div className={classNames(cls.transition, { [cls.open]: open })}>
                  <Disclosure.Panel className={cls.panel}>
                    <ul className={cls.list}>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                      <li className={cls.listItemAdditional}>&#8226; dddfdddddddddddddddd</li>
                    </ul>
                  </Disclosure.Panel>
                </div>
              </div>
            );
          }}
        </Disclosure>
      </div>
    </Page>
  );
};

export default MainPage;
