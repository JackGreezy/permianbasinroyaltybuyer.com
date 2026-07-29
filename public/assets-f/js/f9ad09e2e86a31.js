import { s as s$1, b as bindingsContext } from './bindings-context-DAKrxtTy.js';
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s{constructor(t,s,i,h){if(this.subscribe=false,this.provided=false,this.value=void 0,this.t=(t,s)=>{this.unsubscribe&&(this.unsubscribe!==s&&(this.provided=false,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=true,this.callback&&this.callback(t,s)),this.unsubscribe=s;},this.host=t,void 0!==s.context){const t=s;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??false;}else this.context=s,this.callback=i,this.subscribe=h??false;this.host.addController(this);}hostConnected(){this.dispatchRequest();}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0);}dispatchRequest(){this.host.dispatchEvent(new s$1(this.context,this.host,this.t,this.subscribe));}}
/**
 * A decorator that will initialize the component with the bindings provided by the bindings context.
 * It ensures that the component is initialized only once and that the language is updated when the language changes.
 *
 * @example
 * ```ts
 * import {bindings} from './decorators/bindings';
 * import {InitializableComponent} from './decorators/types';
 *
 * @customElement('test-element')
 * @bindings()
 * export class TestElement extends LitElement implements InitializableComponent<Bindings> {
 *
 *    @state() public bindings: Bindings = {} as Bindings;
 *    @state() public error!: Error;
 *
 *    public initialized = false;
 *
 *    public render() {
 *     return html``;
 *    }
 * }
 * ```
 */
function bindings() {
    return (target) => {
        const connectedCallback = target.prototype.connectedCallback;
        target.prototype.connectedCallback = function () {
            new s(this, {
                context: bindingsContext,
                callback: (value) => {
                    if (this.initialized || Object.keys(value).length === 0) {
                        return;
                    }
                    this.initialized = true;
                    try {
                        this.bindings = value;
                        const updateLanguage = () => this.requestUpdate();
                        this.bindings.i18n.on('languageChanged', updateLanguage);
                        const unsubscribeLanguage = () => this.bindings?.i18n.off('languageChanged', updateLanguage);
                        this.initialize?.();
                        this.unsubscribeLanguage = unsubscribeLanguage;
                    }
                    catch (error) {
                        this.error = error;
                    }
                },
                subscribe: true,
            });
            if (connectedCallback) {
                connectedCallback.call(this);
            }
        };
        const disconnectedCallback = target.prototype.disconnectedCallback;
        target.prototype.disconnectedCallback = function () {
            this.unsubscribeLanguage?.();
            if (disconnectedCallback) {
                disconnectedCallback.call(this);
            }
        };
    };
}
export { bindings as b };
//# sourceMappingURL=bindings-CW6TJGy3.js.map
