import axe from '@axe-core/react';
import Router from 'next/router';
import React, { isValidElement, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { Environments } from '../constants/common.constants';

/**
 * Returns whether or not a given node can be successfully rendered.
 * Useful for checking whether a component has been passed any children.
 *
 * TODO: Determine whether this is still needed for ItemMenu
 */
export const isRenderable = (node: ReactNode): boolean => {
  switch (typeof node) {
    case 'string':
    case 'number':
      return true;
    default:
      if (Array.isArray(node) && node.length) {
        return Boolean(node.reduce((a, b) => a && isRenderable(b), true));
      }
      return isValidElement(node);
  }
};

export const isValidUrl = (str: string) => {
  let url: URL;
  try {
    url = new URL(str);
  } catch {
    return false;
  }
  return url.protocol === 'http:' || url.protocol === 'https:';
};

export const initAxe = () => {
  if (process.env.NODE_ENV === Environments.Production) {
    return;
  }
  axe(React, ReactDOM, 1000);
};

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const waitFor = (conditionFn: () => boolean, ms = 250) => {
  const poll = (resolve: (_?: unknown) => void) => {
    if (conditionFn()) {
      resolve();
    } else {
      setTimeout(() => poll(resolve), ms);
    }
  };
  return new Promise(poll);
};

export const getLocalStorageItem = (item: string) => {
  if (typeof localStorage === 'undefined') {
    return;
  }
  return localStorage.getItem(item);
};

export const setLocalStorageItem = (item: string, value: string) => {
  if (typeof localStorage === 'undefined') {
    return;
  }
  return localStorage.setItem(item, value);
};

export const removeLocalStorageItem = (item: string) => {
  if (typeof localStorage === 'undefined') {
    return;
  }
  return localStorage.removeItem(item);
};

export const getRandomString = () =>
  Math.random()
    .toString(36)
    .slice(2, 10)
    .split('')
    .map((c) => (Math.random() < 0.5 ? c : c.toUpperCase()))
    .join('');

export const getTypedKeys = <T>(object: T): (keyof T)[] => Object.keys(object) as (keyof T)[];

export const redirectTo = (path: string) => Router.push(path);
