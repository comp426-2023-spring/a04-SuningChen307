#!/usr/bin/env node

import express from 'express';
import minimist from 'minimist';

import { playRPS, playRPSLS } from './lib/rpsls.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
