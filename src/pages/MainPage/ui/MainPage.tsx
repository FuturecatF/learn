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
          {({ open }) => (
            <div
              className={classNames(
                cls.contentWrapper,
                {
                  [cls.borderTopHide]: open,
                },
                [cls.contentWrapperBorderTop],
              )}
            >
              <Disclosure.Button
                className={classNames(cls.closureHeaderButton, {
                  [cls.borderTopHide]: open,
                })}
              >
                Lesson 1 - Introduction
                <p className={classNames(cls.icon, { [cls.iconHide]: open })}>+</p>
                <p className={classNames(cls.icon, { [cls.iconHide]: !open })}>-</p>
              </Disclosure.Button>

              <Disclosure.Panel className={cls.panel}>
                <ul className={cls.list}>
                  <li className={cls.listItemAdditional}>&#8226; Generative AI in gamedev</li>
                  <li className={cls.listItemAdditional}>&#8226; How it works</li>
                  <li className={cls.listItemAdditional}>&#8226; Installation guide</li>
                </ul>
              </Disclosure.Panel>
            </div>
          )}
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
                      <li className={cls.listItemAdditional}>&#8226; Prompt engineering</li>
                      <li className={cls.listItemAdditional}>&#8226; Prompt</li>
                      <li className={cls.listItemAdditional}>&#8226; Negative prompt</li>
                      <li className={cls.listItemAdditional}>&#8226; Weights</li>
                      <li className={cls.listItemAdditional}>&#8226; Sampling steps</li>
                      <li className={cls.listItemAdditional}>&#8226; Sampling method</li>
                      <li className={cls.listItemAdditional}>&#8226; Size and functions</li>
                      <li className={cls.listItemAdditional}>&#8226; CFG Scale</li>
                      <li className={cls.listItemAdditional}>&#8226; Seed</li>
                      <li className={cls.listItemAdditional}>&#8226; Practice</li>
                    </ul>
                  </Disclosure.Panel>
                </div>
              </div>
            );
          }}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className={cls.contentWrapper}>
              <Disclosure.Button
                className={classNames(cls.closureHeaderButton, {
                  [cls.borderHide]: open,
                })}
              >
                Lesson 3 - Prompt engineering
                <p className={classNames(cls.icon, { [cls.iconHide]: open })}>+</p>
                <p className={classNames(cls.icon, { [cls.iconHide]: !open })}>-</p>
              </Disclosure.Button>

              <Disclosure.Panel className={cls.panel}>
                <ul className={cls.list}>
                  <li className={cls.listItemAdditional}>&#8226; Prompt writing</li>
                  <li className={cls.listItemAdditional}>&#8226; Prompt reading</li>
                  <li className={cls.listItemAdditional}>&#8226; Metadata</li>
                  <li className={cls.listItemAdditional}>&#8226; Style</li>
                  <li className={cls.listItemAdditional}>&#8226; Matrix</li>
                  <li className={cls.listItemAdditional}>&#8226; Advanced prompt editing</li>
                  <li className={cls.listItemAdditional}>&#8226; Practice</li>
                </ul>
              </Disclosure.Panel>
            </div>
          )}
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
                  Lesson 4 - Training models
                  <p className={classNames(cls.icon, { [cls.iconHide]: open })}>+</p>
                  <p className={classNames(cls.icon, { [cls.iconHide]: !open })}>-</p>
                </Disclosure.Button>

                <Disclosure.Panel className={cls.panel}>
                  <ul className={cls.list}>
                    <li className={cls.listItemAdditional}>&#8226; Textual inversion (embeddings)</li>
                    <li className={cls.listItemAdditional}>&#8226; Hypernetworks</li>
                    <li className={cls.listItemAdditional}>&#8226; LoRA (Low-Rank Adaptation)</li>
                    <li className={cls.listItemAdditional}>&#8226; DreamBooth</li>
                    <li className={cls.listItemAdditional}>&#8226; Practice</li>
                  </ul>
                </Disclosure.Panel>
              </div>
            );
          }}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className={cls.contentWrapper}>
              <Disclosure.Button
                className={classNames(cls.closureHeaderButton, {
                  [cls.borderHide]: open,
                })}
              >
                Lesson 5 - Image improvement
                <p className={classNames(cls.icon, { [cls.iconHide]: open })}>+</p>
                <p className={classNames(cls.icon, { [cls.iconHide]: !open })}>-</p>
              </Disclosure.Button>

              <Disclosure.Panel className={cls.panel}>
                <ul className={cls.list}>
                  <li className={cls.listItemAdditional}>&#8226; Settings</li>
                  <li className={cls.listItemAdditional}>&#8226; Inpainting</li>
                  <li className={cls.listItemAdditional}>&#8226; Outpainting</li>
                  <li className={cls.listItemAdditional}>&#8226; Upscale</li>
                  <li className={cls.listItemAdditional}>&#8226; Image depth</li>
                  <li className={cls.listItemAdditional}>&#8226; Models merging</li>
                  <li className={cls.listItemAdditional}>&#8226; Practice</li>
                </ul>
              </Disclosure.Panel>
            </div>
          )}
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
                  Lesson 6 - Training a neural network
                  <p className={classNames(cls.icon, { [cls.iconHide]: open })}>+</p>
                  <p className={classNames(cls.icon, { [cls.iconHide]: !open })}>-</p>
                </Disclosure.Button>

                <Disclosure.Panel className={cls.panel}>
                  <ul className={cls.list}>
                    <li className={cls.listItemAdditional}>&#8226; Basic methods</li>
                    <li className={cls.listItemAdditional}>&#8226; Dataset preparation</li>
                    <li className={cls.listItemAdditional}>&#8226; Regularization images</li>
                    <li className={cls.listItemAdditional}>&#8226; Google Collab</li>
                    <li className={cls.listItemAdditional}>&#8226; Textual inversion training</li>
                    <li className={cls.listItemAdditional}>&#8226; DreamBooth training</li>
                    <li className={cls.listItemAdditional}>&#8226; Practice</li>
                  </ul>
                </Disclosure.Panel>
              </div>
            );
          }}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div
              className={classNames(cls.contentWrapper, {
                [cls.borderBottomHide]: open,
              })}
            >
              <Disclosure.Button
                className={classNames(cls.closureHeaderButton, {
                  [cls.borderHide]: open,
                })}
              >
                Lesson 7 - ControlNet
                <p className={classNames(cls.icon, { [cls.iconHide]: open })}>+</p>
                <p className={classNames(cls.icon, { [cls.iconHide]: !open })}>-</p>
              </Disclosure.Button>

              <Disclosure.Panel className={cls.panel}>
                <ul className={cls.list}>
                  <li className={cls.listItemAdditional}>&#8226; Settings</li>
                  <li className={cls.listItemAdditional}>&#8226; Functions</li>
                  <li className={cls.listItemAdditional}>&#8226; Models</li>
                  <li className={cls.listItemAdditional}>&#8226; Multi ControlNet</li>
                  <li className={cls.listItemAdditional}>&#8226; Practice</li>
                </ul>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </Page>
  );
};

export default MainPage;
