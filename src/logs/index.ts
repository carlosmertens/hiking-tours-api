import debug from 'debug';

const db = debug('dev:db');
const error = debug('dev:error');
const http = debug('dev:http');
const server = debug('dev:server');

export const log = {db, error, http, server};
