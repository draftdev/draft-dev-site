/**
 * Chart renderer class for generating Chart.js configurations
 * Charts are rendered client-side in the browser
 */
export class ChartRenderer {
  constructor(options = {}) {
    this.brandColor = options.brandColor || '#3B82F6';
  }

  /**
   * Generate a line chart configuration
   * @param {Object} data - Chart data
   * @param {string} title - Chart title
   * @returns {Object} Chart.js configuration
   */
  createLineChart(data, title = '') {
    // Create arrays for point styling to highlight current month
    const pointRadii = data.values.map((_, index) =>
      index === data.currentMonthIndex ? 8 : 5
    );
    const pointHoverRadii = data.values.map((_, index) =>
      index === data.currentMonthIndex ? 10 : 7
    );
    const pointBackgroundColors = data.values.map((_, index) =>
      index === data.currentMonthIndex ? '#F59E0B' : '#654B73'
    );
    const pointBorderColors = data.values.map((_, index) =>
      index === data.currentMonthIndex ? '#F59E0B' : '#654B73'
    );

    return {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: data.currentLabel || 'Trend',
            data: data.values,
            borderColor: '#654B73',
            backgroundColor: 'rgba(232, 228, 237, 0.5)',
            fill: true,
            tension: 0.3,
            pointRadius: pointRadii,
            pointHoverRadius: pointHoverRadii,
            pointBackgroundColor: pointBackgroundColors,
            pointBorderColor: pointBorderColors,
            pointBorderWidth: 2,
            borderWidth: 2
          },
          ...(data.previousValues && data.previousValues.length > 0 ? [{
            label: data.previousLabel || 'Previous',
            data: data.previousValues,
            borderColor: '#9CA3AF',
            backgroundColor: 'transparent',
            borderDash: [5, 5],
            fill: false,
            tension: 0.3,
            pointRadius: 3,
            pointHoverRadius: 5
          }] : [])
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: !!title,
            text: title,
            font: {
              size: 15,
              weight: '600',
              family: "'Fira Mono', monospace"
            },
            color: '#6B7280',
            padding: { top: 0, bottom: 16 },
            align: 'start'
          },
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 12,
            titleFont: {
              size: 13,
              family: "'Fira Mono', monospace"
            },
            bodyFont: {
              size: 12,
              family: "'Fira Mono', monospace"
            },
            callbacks: {
              afterLabel: function(context) {
                if (context.dataIndex === data.currentMonthIndex) {
                  return '(Current Month)';
                }
                return '';
              }
            }
          },
          datalabels: {
            display: true,
            align: 'top',
            anchor: 'end',
            offset: 4,
            clamp: true,
            font: {
              size: 11,
              weight: 'bold',
              family: "'Fira Mono', monospace"
            },
            color: '#374151',
            formatter: function(value) {
              if (value === null || value === undefined) return '';
              return typeof value === 'number' ? Math.round(value).toLocaleString() : value;
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 11,
                family: "'Fira Mono', monospace"
              },
              color: '#6B7280'
            }
          },
          y: {
            beginAtZero: data.beginAtZero !== false,
            grid: {
              color: '#E5E7EB',
              drawBorder: false
            },
            ticks: {
              font: {
                size: 11,
                family: "'Fira Mono', monospace"
              },
              color: '#6B7280'
            }
          }
        }
      }
    };
  }

  /**
   * Generate a bar chart configuration
   * @param {Object} data - Chart data
   * @param {string} title - Chart title
   * @returns {Object} Chart.js configuration
   */
  createBarChart(data, title = '') {
    // Generate colors, highlighting current month with orange
    const colors = data.values.map((_, index) => {
      if (index === data.currentMonthIndex) {
        return '#F59E0B'; // Orange for current month
      }
      return data.colors ? data.colors[index] : '#654B73';
    });

    return {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: data.label || 'Value',
          data: data.values,
          backgroundColor: colors,
          borderWidth: 0,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: !!title,
            text: title,
            font: {
              size: 15,
              weight: '600',
              family: "'Fira Mono', monospace"
            },
            color: '#6B7280',
            padding: { top: 0, bottom: 16 },
            align: 'start'
          },
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 12,
            titleFont: {
              size: 13,
              family: "'Fira Mono', monospace"
            },
            bodyFont: {
              size: 12,
              family: "'Fira Mono', monospace"
            },
            callbacks: {
              afterLabel: function(context) {
                if (context.dataIndex === data.currentMonthIndex) {
                  return '(Current Month)';
                }
                return '';
              }
            }
          },
          datalabels: {
            display: true,
            anchor: 'center',
            align: 'center',
            font: {
              size: 16,
              weight: 'bold',
              family: "'Fira Mono', monospace"
            },
            color: '#FFFFFF',
            formatter: function(value) {
              if (value === null || value === undefined) return '';
              return typeof value === 'number' ? Math.round(value).toLocaleString() : value;
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 11,
                family: "'Fira Mono', monospace"
              },
              color: '#6B7280'
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: '#E5E7EB',
              drawBorder: false
            },
            ticks: {
              font: {
                size: 11,
                family: "'Fira Mono', monospace"
              },
              color: '#6B7280'
            }
          }
        }
      }
    };
  }

  /**
   * Generate a comparison bar chart configuration
   * @param {Object} data - Chart data with current and previous values
   * @param {string} title - Chart title
   * @returns {Object} Chart.js configuration
   */
  createComparisonChart(data, title = '') {
    return {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: data.currentLabel || 'Current',
            data: data.values,
            backgroundColor: '#654B73',
            borderWidth: 0,
            borderRadius: 4
          },
          {
            label: data.previousLabel || 'Previous',
            data: data.previousValues,
            backgroundColor: '#D1D5DB',
            borderWidth: 0,
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: !!title,
            text: title,
            font: {
              size: 15,
              weight: '600',
              family: "'Fira Mono', monospace"
            },
            color: '#6B7280',
            padding: { top: 0, bottom: 16 },
            align: 'start'
          },
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: {
                size: 11,
                family: "'Fira Mono', monospace"
              },
              color: '#6B7280',
              boxWidth: 12,
              padding: 10
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 12,
            titleFont: {
              size: 13,
              family: "'Fira Mono', monospace"
            },
            bodyFont: {
              size: 12,
              family: "'Fira Mono', monospace"
            }
          },
          datalabels: {
            display: true,
            anchor: 'center',
            align: 'center',
            font: {
              size: 12,
              weight: 'bold',
              family: "'Fira Mono', monospace"
            },
            color: '#FFFFFF',
            formatter: function(value) {
              if (value === null || value === undefined) return '';
              return typeof value === 'number' ? Math.round(value).toLocaleString() : value;
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 11,
                family: "'Fira Mono', monospace"
              },
              color: '#6B7280'
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: '#E5E7EB',
              drawBorder: false
            },
            ticks: {
              font: {
                size: 11,
                family: "'Fira Mono', monospace"
              },
              color: '#6B7280'
            }
          }
        }
      }
    };
  }

  /**
   * Convert hex color to rgba
   * @param {string} hex - Hex color
   * @param {number} alpha - Alpha value
   * @returns {string} RGBA color string
   */
  hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  /**
   * Adjust brightness of a hex color
   * @param {string} hex - Hex color
   * @param {number} amount - Amount to adjust (-255 to 255)
   * @returns {string} Adjusted hex color
   */
  adjustBrightness(hex, amount) {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + amount));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
    const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
  }

  /**
   * Generate an array of colors
   * @param {number} count - Number of colors needed
   * @returns {Array<string>} Array of hex colors
   */
  generateColors(count) {
    const baseColors = [
      '#3B82F6', // blue
      '#10B981', // green
      '#F59E0B', // amber
      '#EF4444', // red
      '#8B5CF6', // purple
      '#EC4899', // pink
      '#06B6D4', // cyan
      '#F97316'  // orange
    ];

    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(baseColors[i % baseColors.length]);
    }
    return colors;
  }
}

export default ChartRenderer;
