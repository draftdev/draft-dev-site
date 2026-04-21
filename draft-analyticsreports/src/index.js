#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateReport, listClients, createClient } from './generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

// Get default directories
const clientsDir = path.join(__dirname, '..', 'clients');
const outputDir = path.join(__dirname, '..', 'output');

program
  .name('analyticsreports')
  .description('Generate standalone HTML and PDF reports from CSV data and screenshots')
  .version('1.0.0');

// Generate command
program
  .command('generate [client]')
  .description('Generate report for a client')
  .option('-m, --month <month>', 'Report month in YYYY-MM format', getCurrentMonth())
  .option('-a, --all', 'Generate reports for all clients')
  .option('-o, --output <dir>', 'Output directory', outputDir)
  .option('-f, --format <format>', 'Output format: html, pdf, or both', 'html')
  .action(async (client, options) => {
    // Validate format option
    const validFormats = ['html', 'pdf', 'both'];
    if (!validFormats.includes(options.format)) {
      console.error(`Invalid format: ${options.format}`);
      console.error(`Valid formats: ${validFormats.join(', ')}`);
      process.exit(1);
    }
    try {
      if (options.all) {
        // Generate for all clients
        const clients = listClients(clientsDir);

        if (clients.length === 0) {
          console.log('No clients found. Create one with: npm run new-client "Client Name"');
          return;
        }

        console.log(`Generating reports for ${clients.length} clients...\n`);

        for (const clientName of clients) {
          try {
            await generateReport(clientName, options.month, {
              clientsDir,
              outputDir: options.output,
              format: options.format
            });
            console.log();
          } catch (error) {
            console.error(`Error generating report for ${clientName}: ${error.message}`);
          }
        }

        console.log('Done!');
      } else if (client) {
        // Generate for specific client
        const result = await generateReport(client, options.month, {
          clientsDir,
          outputDir: options.output,
          format: options.format
        });

        console.log(`\nReport generated successfully!`);
        if (result.html) {
          console.log(`HTML: file://${result.html}`);
        }
        if (result.pdf) {
          console.log(`PDF: ${result.pdf}`);
        }
      } else {
        console.error('Please specify a client name or use --all flag');
        console.log('Usage: npm run generate <client-name> --month YYYY-MM');
        console.log('       npm run generate --all --month YYYY-MM');
        process.exit(1);
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  });

// New client command
program
  .command('new-client <name>')
  .description('Create a new client from template')
  .action((name) => {
    try {
      createClient(name, clientsDir);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  });

// List clients command
program
  .command('list-clients')
  .description('List all configured clients')
  .action(() => {
    const clients = listClients(clientsDir);

    if (clients.length === 0) {
      console.log('No clients found.');
      console.log('Create one with: npm run new-client "Client Name"');
      return;
    }

    console.log('Configured clients:\n');
    clients.forEach(client => {
      console.log(`  - ${client}`);
    });
    console.log(`\nTotal: ${clients.length} client(s)`);
  });

// Helper function to get current month
function getCurrentMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

program.parse();
