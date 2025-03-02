flyctl --config fly/fly.toml secrets set DATABASE_URL=$DATABASE_URL \
                   QDRANT_API_URL=$QDRANT_API_URL \
                   QDRANT_API_KEY=$QDRANT_API_KEY \
                   OPENAI_API_KEY=$OPENAI_API_KEY \
                   APP_AWS_ACCESS_KEY=$APP_AWS_ACCESS_KEY \
                   APP_AWS_SECRET_KEY=$APP_AWS_SECRET_KEY \
                   GITHUB_ID=$GITHUB_ID \
                   GITHUB_SECRET=$GITHUB_SECRET \
                   EMAIL_SERVER=$EMAIL_SERVER \
                   EMAIL_FROM=$EMAIL_FROM \
                   CRISP_HOOK_SECRET=$CRISP_HOOK_SECRET \
                   CRISP_TOKEN_ID=$CRISP_TOKEN_ID \
                   NEXT_PUBLIC_S3_BUCKET_NAME=$NEXT_PUBLIC_S3_BUCKET_NAME \
                   CRISP_TOKEN_KEY=$CRISP_TOKEN_KEY \
                   NEXT_PUBLIC_DASHBOARD_URL=$NEXT_PUBLIC_DASHBOARD_URL \
                   SLACK_BOT_TOKEN=$SLACK_BOT_TOKEN \
                   NEXTAUTH_SECRET=$NEXTAUTH_SECRET
                   

