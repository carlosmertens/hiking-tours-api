import debug from 'debug';

const db = debug('app:db');
const error = debug('app:error');
const http = debug('app:http');
const server = debug('app:server');

export const log = {db, error, http, server};
