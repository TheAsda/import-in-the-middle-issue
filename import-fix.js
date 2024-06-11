import { register } from 'module'

console.log('registering hook')
register(import.meta.resolve('import-in-the-middle/hook.mjs'));