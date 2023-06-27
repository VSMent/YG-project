import { History } from 'lucide-react'

import { Button } from '../shadcn-ui/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../shadcn-ui/components/ui/hover-card'
import { Label } from '../shadcn-ui/components/ui/label'
import { Separator } from '../shadcn-ui/components/ui/separator'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../shadcn-ui/components/ui/tabs'
import { Textarea } from '../shadcn-ui/components/ui/textarea'

import { CodeViewer } from '../shadcn-ui/components/examples/code-viewer'
import { Icons } from '../shadcn-ui/components/examples/icons'
import { MaxLengthSelector } from '../shadcn-ui/components/examples/maxlength-selector'
import { ModelSelector } from '../shadcn-ui/components/examples/model-selector'
import { PresetActions } from '../shadcn-ui/components/examples/preset-actions'
import { PresetSave } from '../shadcn-ui/components/examples/preset-save'
import { PresetSelector } from '../shadcn-ui/components/examples/preset-selector'
import { PresetShare } from '../shadcn-ui/components/examples/preset-share'
import { TemperatureSelector } from '../shadcn-ui/components/examples/temperature-selector'
import { TopPSelector } from '../shadcn-ui/components/examples/top-p-selector'
import { models, types } from '../shadcn-ui/data/models'
import { presets } from '../shadcn-ui/data/presets'
// import './styles.css'
// import Image from 'next/image'

export default function CommunicationPage() {
  return (
    <>
      <div className="hidden h-full flex-col md:flex">
        <div className="h-full p-8 pt-6">
          <div className="container grid h-full items-stretch gap-6 md:grid-cols-[200px_1fr]">
            <div className="min-h-[400px] rounded-md border bg-muted lg:min-h-[700px]" />
            <div className="md:order-1">
              <div className="mt-0 border-0 p-0">
                <div className="flex flex-col space-y-4">
                  <div className="grid h-full gap-6 lg:grid-cols-2">
                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-1 flex-col space-y-2">
                        <Textarea
                          id="input"
                          placeholder="We is going to the market."
                          className="flex-1 lg:min-h-[580px]"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Label htmlFor="instructions">Instructions</Label>
                        <Textarea
                          id="instructions"
                          placeholder="Fix the grammar."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button>Submit</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
