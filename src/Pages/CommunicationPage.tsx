import { History, Send } from 'lucide-react'

import { Button } from '../shadcn-ui/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../shadcn-ui/components/ui/hover-card'
import { Label } from '../shadcn-ui/components/ui/label'
import { Separator } from '../shadcn-ui/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Components/Tabs'
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
import { useChatStore } from '../Utils/Stores'
import { ScrollArea } from '../shadcn-ui/components/ui/scroll-area'
import ChatMessage from '../Components/ChatMessage'
// import './styles.css'
// import Image from 'next/image'

export default function CommunicationPage() {
  const { chats } = useChatStore()

  return (
    <>
      <div className="hidden h-full flex-col md:flex">
        <div className="h-full p-8 pt-6">
          <Tabs
            defaultValue="account"
            className="container grid h-full items-stretch gap-6 md:grid-cols-[200px_1fr]"
            orientation="vertical"
          >
            {/*   p-1 text-muted-foreground*/}
            <TabsList
              className={
                'flex min-h-[400px] w-full flex-col items-stretch justify-start rounded-md border ' +
                'bg-muted text-muted-foreground lg:min-h-[700px]'
              }
            >
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password </TabsTrigger>
            </TabsList>
            {/*<TabsContent value="account">*/}
            {/*  <ScrollArea>*/}
            {/*    asd*/}
            {/*  </ScrollArea>*/}
            {/*</TabsContent>*/}
            {/*<TabsContent value="password">*/}
            {/*  Change your password here.*/}
            {/*</TabsContent>*/}
            {/*  */}
            {/*'flex min-h-[400px] w-full flex-col items-stretch justify-start rounded-md border ' +*/}
            {/*'bg-muted text-muted-foreground lg:min-h-[700px]'*/}
            <div className="flex flex-col gap-2 ">
              <div className="flex h-full flex-col gap-3 rounded-md border p-4 text-base">
                {[chats[0]].map((c) =>
                  c.messages.map((m) => (
                    <ChatMessage
                      key={`${c.id} ${m.time}`}
                      className={
                        m.author == c.participants[0]
                          ? 'self-end'
                          : 'self-start'
                      }
                      author={m.author}
                      text={m.body}
                      time={m.time}
                    />
                  ))
                )}
              </div>
              <div className="flex flex-row items-center ">
                <Textarea
                  className="resize-none"
                  placeholder="Напишіть повідомлення тут.."
                />
                <Button className="mx-2" size="icon">
                  <Send />
                </Button>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  )
}
