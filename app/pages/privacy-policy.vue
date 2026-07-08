<template>
  <UPage>
    <HeroStandard title="Privacy Policy" />
    <div class="container container-px py-12">
      <div class="prose">
        <h2>Introduction</h2>
        <p>
          At Been Coffee House Ltd, we are committed to protecting your privacy and ensuring that
          your personal information is handled in a safe and responsible manner. This Privacy Policy
          outlines how we collect, use, and protect your information when you visit our website or
          use our services.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, phone number, and
          payment details when you make a purchase or sign up for our newsletter. We also collect
          non-personal information such as browser type, IP address, and browsing behavior to
          improve our website and services.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use the information we collect to process your orders, communicate with you about your
          purchases and table bookings, send you promotional materials (if you have opted in), and
          improve our website and services. We do not sell or rent your personal information to
          third parties.
        </p>

        <h2>Data Security</h2>
        <p>
          We take the security of your personal information seriously and implement appropriate
          measures to protect it from unauthorised access, disclosure, alteration, or destruction.
          However, please be aware that no method of transmission over the internet or electronic
          storage is completely secure.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. You can also
          opt out of receiving promotional emails from us at any time by following the unsubscribe
          instructions in the email or contacting us directly.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated effective date. We encourage you to review this policy periodically
          to stay informed about how we are protecting your information.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or how we handle your
          personal information, please <ULink to="/contact">contact us</ULink>.
        </p>
      </div>
    </div>
  </UPage>
</template>

<script setup lang="ts">
const title = 'Privacy Policy - Been Coffee'
const description =
  "Read Been Coffee's Privacy Policy to understand how we handle your personal information and ensure your data is protected."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})
</script>
