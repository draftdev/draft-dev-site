import Image from 'next/image'
import FormKeywordAuditTopicClusters from '../vendors/hubspot/form-keyword-audit-topic-clusters'

const ServiceInfo = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl">
              <h1 className="subheader-mobile-gradient px-8 text-2xl sm:text-4xl">
                How to run your own Keyword Audit and Creating Topic Clusters
              </h1>
              <FormKeywordAuditTopicClusters />
            </div>
          </div>

          <div className="lg:ml-auto">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="Learn how to run your own SEO Keyword Audit and how to create content topic clusters"
                    src="/site/med-portrait/keyword-audit-topic-clusters-draft-dev.jpg"
                    width={500}
                    height={650}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceInfo
