import type electron from 'electron';
import type IJSONdb from 'simple-json-db';


declare global {
    interface Window {
        require(moduleSpecifier: 'electron'): typeof electron;
        require(moduleSpecifier: 'simple-json-db'): typeof IJSONdb;
    }
}