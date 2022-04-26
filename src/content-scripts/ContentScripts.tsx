import React from 'react';
import { render } from 'react-dom';
import { contentClient } from '../chrome';
import './ContentScripts.scss';
import DrawerDemo from './DrawerDemo';

export default class ContentScripts {
    container: HTMLElement|null;

    constructor() {
        this.container = null;
        this.init();
    }

    init() {
        // 注意，必须设置了run_at=document_start 此段代码才会生效
        document.addEventListener('DOMContentLoaded', () => {
            this.initContainer();
            this.initMessageClient();
        });
    }

    // 初始化消息通道
    initMessageClient() {
        const { container } = this;

        contentClient.listen('show drawer', () => {
            this.showContainer();

            render(
                <DrawerDemo onClose={() => { this.hideContainer(); }} />,
                container
            );
        });
    }

    // 初始化外层包裹元素
    initContainer() {
        const { document } = window;
        this.container = document.createElement('div');
        this.container.setAttribute('id', 'chrome-extension-content-base-element');
        // @ts-ignore
        this.container.setAttribute('class', WRAPPER_CLASS_NAME);
        document.body.appendChild(this.container);
    }

    showContainer() {
        this.container!.setAttribute('style', 'display: block');
    }

    hideContainer() {
        this.container!.setAttribute('style', 'display: none');
    }
}
