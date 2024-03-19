import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import React from 'react';
import { createComponent } from '@lit/react';

@customElement('simple-button')
export class SimpleButton extends LitElement {
  @property({ type: String })
  label: string = 'Click me';

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  type: string = 'primary';

  @property({ type: String })
  size: string = 'medium';

  static override styles = css`
    button {
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      outline: none;
    }

    button.small {
      padding: 5px 10px;
      font-size: 14px;
    }

    button.medium {
      padding: 10px 20px;
      font-size: 16px;
    }

    button.large {
      padding: 15px 30px;
      font-size: 18px;
    }

    button.primary {
      background-color: #007bff; /* Bootstrap primary color */
      color: white;
    }

    button.primary:hover {
      background-color: #0056b3; /* Slightly darker shade */
    }

    button.secondary {
      background-color: #6c757d; /* Bootstrap secondary color */
      color: white;
    }

    button.secondary:hover {
      background-color: #545b62; /* Slightly darker shade */
    }

    button.error {
      background-color: #dc3545; /* Bootstrap error color */
      color: white;
    }

    button.error:hover {
      background-color: #bd2130; /* Slightly darker shade */
    }

    /* Additional types */
    button.success {
      background-color: #28a745; /* Bootstrap success color */
      color: white;
    }

    button.success:hover {
      background-color: #218838; /* Slightly darker shade */
    }

    button.warning {
      background-color: #ffc107; /* Bootstrap warning color */
      color: black;
    }

    button.warning:hover {
      background-color: #e0a800; /* Slightly darker shade */
    }

    button.info {
      background-color: #17a2b8; /* Bootstrap info color */
      color: white;
    }

    button.info:hover {
      background-color: #138496; /* Slightly darker shade */
    }

    /* Disabled state */
    button:disabled {
      background-color: lightgray;
      cursor: not-allowed;
    }
  `;

  override render() {
    return html`
      <button
        class="${this.type} ${this.size}"
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        ${this.label}
      </button>
    `;
  }

  private handleClick() {
    this.dispatchEvent(new CustomEvent('button-clicked'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "simple-button": SimpleButton;
  }
}



export const SimpleButtonComponent = createComponent({
  tagName: 'simple-button',
  elementClass: SimpleButton,
  react: React,
  events: {
    'button-clicked': 'buttonClicked',
  },
});