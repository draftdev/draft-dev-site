interface ChartData {
  labels: string[]
  values: (number | string)[]
  previousValues?: (number | string)[] | null
  currentLabel?: string
  previousLabel?: string
  currentMonthIndex?: number | null
  beginAtZero?: boolean
  colors?: string[]
  label?: string
}

export class ChartRenderer {
  private brandColor: string

  constructor(options: { brandColor?: string } = {}) {
    this.brandColor = options.brandColor || '#3B82F6'
  }

  createLineChart(data: ChartData, title = '') {
    const pointRadii = data.values.map((_, i) => (i === data.currentMonthIndex ? 8 : 5))
    const pointHoverRadii = data.values.map((_, i) => (i === data.currentMonthIndex ? 10 : 7))
    const pointBackgroundColors = data.values.map((_, i) =>
      i === data.currentMonthIndex ? '#F59E0B' : '#654B73'
    )

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
            pointBorderColor: pointBackgroundColors,
            pointBorderWidth: 2,
            borderWidth: 2,
          },
          ...(data.previousValues && data.previousValues.length > 0
            ? [
                {
                  label: data.previousLabel || 'Previous',
                  data: data.previousValues,
                  borderColor: '#9CA3AF',
                  backgroundColor: 'transparent',
                  borderDash: [5, 5],
                  fill: false,
                  tension: 0.3,
                  pointRadius: 3,
                  pointHoverRadius: 5,
                },
              ]
            : []),
        ],
      },
      options: this.lineOptions(title, data),
    }
  }

  createBarChart(data: ChartData, title = '') {
    const colors = data.values.map((_, i) =>
      i === data.currentMonthIndex ? '#F59E0B' : data.colors?.[i] ?? '#654B73'
    )

    return {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: data.label || 'Value',
            data: data.values,
            backgroundColor: colors,
            borderWidth: 0,
            borderRadius: 4,
          },
        ],
      },
      options: this.barOptions(title, data, { centerLabels: true }),
    }
  }

  createComparisonChart(data: ChartData, title = '') {
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
            borderRadius: 4,
          },
          {
            label: data.previousLabel || 'Previous',
            data: data.previousValues,
            backgroundColor: '#D1D5DB',
            borderWidth: 0,
            borderRadius: 4,
          },
        ],
      },
      options: this.barOptions(title, data, { showLegend: true }),
    }
  }

  private sharedOptions(title: string) {
    const monoFont = "'Fira Mono', monospace"
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: !!title,
          text: title,
          font: { size: 15, weight: '600', family: monoFont },
          color: '#6B7280',
          padding: { top: 0, bottom: 16 },
          align: 'start',
        },
        tooltip: {
          backgroundColor: 'rgba(0,0,0,0.8)',
          padding: 12,
          titleFont: { size: 13, family: monoFont },
          bodyFont: { size: 12, family: monoFont },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 11, family: monoFont }, color: '#6B7280' },
        },
        y: {
          grid: { color: '#E5E7EB', drawBorder: false },
          ticks: { font: { size: 11, family: monoFont }, color: '#6B7280' },
        },
      },
    }
  }

  private lineOptions(title: string, data: ChartData) {
    const base = this.sharedOptions(title)
    const monoFont = "'Fira Mono', monospace"
    const currentIdx = data.currentMonthIndex
    return {
      ...base,
      plugins: {
        ...base.plugins,
        legend: { display: false },
        datalabels: {
          display: true,
          align: 'top',
          anchor: 'end',
          offset: 4,
          clamp: true,
          font: { size: 11, weight: 'bold', family: monoFont },
          color: '#374151',
          formatter: function (value: unknown) {
            if (value === null || value === undefined) return ''
            return typeof value === 'number' ? Math.round(value).toLocaleString() : value
          },
        },
        tooltip: {
          ...base.plugins.tooltip,
          callbacks: {
            afterLabel: function (context: { dataIndex: number }) {
              return context.dataIndex === currentIdx ? '(Current Month)' : ''
            },
          },
        },
      },
      scales: {
        ...base.scales,
        y: { ...base.scales.y, beginAtZero: data.beginAtZero !== false },
      },
    }
  }

  private barOptions(
    title: string,
    data: ChartData,
    opts: { centerLabels?: boolean; showLegend?: boolean } = {}
  ) {
    const base = this.sharedOptions(title)
    const monoFont = "'Fira Mono', monospace"
    const currentIdx = data.currentMonthIndex
    return {
      ...base,
      plugins: {
        ...base.plugins,
        legend: opts.showLegend
          ? {
              display: true,
              position: 'top',
              labels: { font: { size: 11, family: monoFont }, color: '#6B7280', boxWidth: 12, padding: 10 },
            }
          : { display: false },
        datalabels: {
          display: true,
          anchor: opts.centerLabels ? 'center' : 'end',
          align: opts.centerLabels ? 'center' : 'top',
          font: { size: opts.centerLabels ? 16 : 11, weight: 'bold', family: monoFont },
          color: opts.centerLabels ? '#FFFFFF' : '#374151',
          formatter: function (value: unknown) {
            if (value === null || value === undefined) return ''
            return typeof value === 'number' ? Math.round(value).toLocaleString() : value
          },
        },
        tooltip: {
          ...base.plugins.tooltip,
          callbacks: {
            afterLabel: function (context: { dataIndex: number }) {
              return context.dataIndex === currentIdx ? '(Current Month)' : ''
            },
          },
        },
      },
      scales: { ...base.scales, y: { ...base.scales.y, beginAtZero: true } },
    }
  }
}

export default ChartRenderer
