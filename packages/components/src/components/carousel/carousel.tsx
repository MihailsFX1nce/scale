/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/*
accessibility as proposed on 
https://www.w3.org/WAI/tutorials/carousels/working-example/
*/

import { Component, Prop, h, State, Element, Host } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../utils/status-note';
@Component({
  tag: 'scale-carousel',
  styleUrl: './carousel.css',
  shadow: true,
})
export class Carousel {
  @Element() hostElement: HTMLElement;

  /** (optional) carousel display direction */
  /** ToDo 
   * rename vertical=“false” to  alignment=“vertical”
   * 
  */
  @Prop() vertical?: boolean = false;
  /** (optional) Injected CSS styles */
  @Prop() styles?: string;
   /** (optional) color scheme arrow buttons */
  @Prop() arrowColorScheme?: 'light' | 'dark' = 'light';
  /** (optional) If `true`, the carousel is disabled */
  @Prop() disabled?: boolean = false;
  /** (optional) arrows visible, hidden, or visible when hovering over the slider */
  @Prop() arrowAppearance?: 'permanent' | 'hidden' | 'hover' = 'hover';
  /** (optional) If `true`, a slide has a card frame */
  @Prop() cardFrame?: boolean = false;

  @State() slidesArray = [];
  @State() value = 0;

  connectedCallback() {
    statusNote({ source: this.hostElement, type: 'warn' });
  }

  componentWillLoad() {
    if (this.slidesArray.length === 0) {
      const children = this.hostElement.children;
      // tslint:disable-next-line: prefer-for-of
      for (let childIndex = 0; childIndex < children.length; childIndex++) {
        if (children[childIndex].slot === '') {
          // tslint:disable-next-line: prefer-for-of
            const element = children[childIndex];
            this.slidesArray.push(element);
        }
      }
    }
  }

  handleSlideChange = (direction) => {
    const val = this.value;
    if (direction === 'prev') {
      val === 0
        ? (this.value = -100 * (this.slidesArray.length - 1))
        : (this.value = val + 100);
    }

    if (direction === 'next') {
      val === -100 * (this.slidesArray.length - 1)
        ? (this.value = 0)
        : (this.value = val - 100);
    }
  };

  setActiveSlide = (index) => {
    this.value = -100 * index;
  };

  setTransformValue = () => {
    if (!!this.vertical) {
      return `translateY(${this.value}%)`;
    }
    return `translateX(${this.value}%)`;
  };

  setActiveCssClass = (index) => {
    if (Math.abs(this.value) / 100 === index) {
      return 'carousel__indicator--active';
    }
    return '';
  };

  render() {
    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}
        <div class={this.getCssClassMap()}>
          <ul class="carousel__slides">
            {this.slidesArray.map((element) => (
              <li
                class="carousel__slide--wrapper"
                style={{ transform: this.setTransformValue() }}
              >
                <div 
                  class={`carousel__slide carousel__slide--${this.cardFrame}`} 
                  innerHTML={element.outerHTML}>
                </div>
              </li>
            ))}
          </ul>
          <ul class={`carousel__arrows carousel__arrows--${this.arrowAppearance}`}>
            <li>
              <button 
                type="button" 
                disabled={this.disabled}
                class={`carousel__arrow carousel__arrow--${this.arrowColorScheme} carousel__arrow--left`}
                onClick={() => {
                  this.handleSlideChange('prev');
                }}
                >
                <scale-icon-navigation-left
                  class="carousel__arrow-icon"
                  size={16}
                  accessibility-title="previous item"
                />
              </button>
            </li>
            <li>
              <button 
                type="button" 
                disabled={this.disabled}
                class={`carousel__arrow carousel__arrow--${this.arrowColorScheme} carousel__arrow--right`} 
                onClick={() => {
                    this.handleSlideChange('next');
                  }}>
                <scale-icon-navigation-right
                  class="carousel__arrow-icon"
                  size={16} 
                  accessibility-title="next item"
                />
              </button>
            </li>
          </ul>
          <ul class="carousel__indicators">
            {Array.from(Array(this.slidesArray.length).keys()).map((index) => (
              <li key={index}>
                <button 
                  disabled={this.disabled}
                  class={`carousel__indicator ${this.setActiveCssClass(index)}`}
                  onClick={() => this.setActiveSlide(index)}>
                    <span class="carousel__indicator-span--hidden">News</span>
                    {index + 1}
                </button>
              </li>
            ))}
          </ul>
          <div
            aria-live="polite"
            aria-atomic="true"
            class="liveregion visuallyhidden"
          ></div>
        </div>
      </Host>
    );
  }

  getCssClassMap() {
    return classNames(
      'carousel', 
      this.disabled && `carousel--disabled`,
      );
  }
}
