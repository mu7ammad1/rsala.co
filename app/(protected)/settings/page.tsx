"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { LoginButton } from "@/components/auth/login-button";

import { SettingsSchema } from "@/schemas";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { settings } from "@/actions/settings";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { UserRole } from "@prisma/client";
import { UserButton } from "@/components/auth/user-button";
import Profile_Settings from "@/components/comps/profile/settings";
import Tabs_Message from "@/components/comps/profile/Tabs_Messsage";

const SettingsPage = () => {
  const user = useCurrentUser();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
      name: user?.name || undefined,
      email: user?.email || undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  return (
    <>
      {user != null ? (
        <Card className="w-[600px] h-full">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div className="basis-14">
                <UserButton />
              </div>
              <p className="basis-full text-2xl font-semibold text-center">
                ⚙️ Profile Settings
              </p>

              <Drawer>
                <DrawerTrigger className="h-9 px-4 py-2  bg-primary hover:bg-[#303030] text-primary-foreground shadow hover:bg-primary/90  inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Edit Profile
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>
                      <div className="flex justify-between items-center">
                        <h1>Personal Account Settings</h1>
                        <DrawerClose>
                          <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                      </div>
                    </DrawerTitle>
                    <DrawerDescription>
                      This action cannot be undone.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <CardContent>
                      <Form {...form}>
                        <form
                          className="space-y-6"
                          onSubmit={form.handleSubmit(onSubmit)}
                        >
                          <div className="space-y-4">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Name</FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      placeholder="John Doe"
                                      disabled={isPending}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="username"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>username</FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      placeholder="username"
                                      defaultValue={user?.username}
                                      disabled={isPending}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="bio"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>bio</FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      placeholder="bio"
                                      defaultValue={user?.bio}
                                      disabled={isPending}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            {user?.isOAuth === false && (
                              <>
                                <FormField
                                  control={form.control}
                                  name="email"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Email</FormLabel>
                                      <FormControl>
                                        <Input
                                          {...field}
                                          placeholder="john.doe@example.com"
                                          type="email"
                                          disabled={isPending}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name="password"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Password</FormLabel>
                                      <FormControl>
                                        <Input
                                          {...field}
                                          placeholder="******"
                                          type="password"
                                          disabled={isPending}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name="newPassword"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>New Password</FormLabel>
                                      <FormControl>
                                        <Input
                                          {...field}
                                          placeholder="******"
                                          type="password"
                                          disabled={isPending}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </>
                            )}
                          </div>
                          <FormError message={error} />
                          <FormSuccess message={success} />
                          <Button disabled={isPending} type="submit">
                            Save
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1">
            <Tabs_Message username={user.username} />
          </CardContent>
        </Card>
      ) : (
        <div className="h-screen text-balance font-bold text-3xl text-white flex justify-center items-center">
          <div>
            <h1>You need to log in to view this page</h1>
            <LoginButton mode="modal" asChild>
              <Button variant="secondary" size="lg">
                Sign in
              </Button>
            </LoginButton>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsPage;
